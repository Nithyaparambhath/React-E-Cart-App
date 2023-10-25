import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'


function Cart() {
  const cartListArray = useSelector((state)=>state.cartReducer)
 const dispatch=useDispatch()
 const navigate = useNavigate()
const [total,setTotal] =useState(0)
 const getCartTotal = ()=>{
  if(cartListArray.length>0){
    setTotal(cartListArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }
 else{
  setTotal(0)
 }
}

useEffect(()=>{
getCartTotal()
},[cartListArray])


const handleCart=()=>{
  dispatch(emptyCart())
  alert("Order Successfully Placed...Thank you for purchasing with us!!!")
  navigate('/')
}
  return (
    
     
      
    <div className='m-5'>
     
      {cartListArray.length>0? 
<div className="row">
<div className='col-lg-7'>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {
          cartListArray.map((product,index)=>(
            <tr key={index}>
          <td>{index+1}</td>
          <td>{product.title}</td>
          <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
          <td>{product.price}</td>
          <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i class="fa-solid fa-trash text-danger fa-2x"></i></button></td>
        </tr>
          ))
        }
      </tbody>
    </Table>
  </div>
  <div className="col-lg-1"></div>
  <div className="col-lg-4">
    <div className="border p-3 rounded shadow">
    <h1 className='text-primary fs-2 fw-bol'>Cart Summary</h1>
    <h4>Total Product: <span>{cartListArray.length}</span></h4>
    <h4>Total: <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
    <div className="d-grid">
      <button onClick={handleCart} className='btn btn-success rounded'>Check Out</button>
    </div>
    </div>
  </div>
</div>
  
        :<div className='text-center m-5'>
              <img src="" alt="" />
              <h3>Your Cart is Empty!!!</h3>
              <Link className='btn btn-info' style={{textDecoration:'none'}} to={'/'}> Back to Home</Link>
            </div>}
       
        
     
    </div>
  )
}

export default Cart