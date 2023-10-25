import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/whishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch =useDispatch()

  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='m-5'>
        {wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      
        <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
          <Card.Img style={{height:'200px'}} variant="top" src={product?.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
              <p>{product?.description.slice(0,55)}</p>
              <h5>$ {product?.price}</h5>
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(removeFromWishlist(product.id))}   className='btn btn-light'><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
              <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'><i class="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
            </div>
          </Card.Body>
        </Card>
    
        </Col>
        )):<div className='text-center m-5'>
          <img src="" alt="" />
          <h3>Your Wishlist is Empty!!!</h3>
          <Link className='btn btn-info' style={{textDecoration:'none'}} to={'/'}> Back to Home</Link>
        </div>}
      </Row>
    </div>
  )
}

export default Wishlist