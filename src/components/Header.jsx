import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const wishlist =useSelector((state)=>state.wishlistReducer)
  return (
    <Navbar expand="lg" className="bg-info ">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'#ffffff',fontWeight:'800'}}> <i class="fa-solid fa-cart-shopping text-warning "></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded'><Link className='d-flex align-items-center' to={'/wishlist'} style={{color:'#ffffff',textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-heart text-danger me-2"></i> Wishlist <Badge className='ms-2 rounded' bg='light'>{wishlist.length}</Badge></Link></Nav.Link>

            <Nav.Link className='btn border rounded ms-3'><Link className='d-flex align-items-center' to={'/wishlist'} style={{color:'#ffffff',textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-cart-shopping text-warning me-2"></i> Cart <Badge className='ms-2 rounded' bg='light'>10</Badge></Link></Nav.Link>
                
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header