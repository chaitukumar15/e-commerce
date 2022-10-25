import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from "react-redux"
import { Outlet, Link } from "react-router-dom";
import "./components.css";
import {GoogleAuthLogIn,GoogleAuthLogOut} from "./googleAuth.js"

let NavbarTop=()=>{
  let logged=sessionStorage.getItem("logged");
  console.log(logged);
let selector=useSelector(state=>state)
let CartNumbers=selector.allProducts.cart;
let cartNum=new Set(CartNumbers);
let cartNumberArray=[...cartNum]
let CartNumber=cartNumberArray.length;
let GoogleDataUsed=selector.allProducts.googleDataValue[0];
console.log(GoogleDataUsed);
// console.log(GoogleDataUsed.imageUrl);
    return(
        <>
<Navbar bg="dark" variant="dark" expand="lg">
      <Container >

        {  logged !== "true" ? 

        <Navbar.Brand href="#">ShopHub </Navbar.Brand>
       
        :
        
        <Navbar.Brand href="#"><img src={GoogleDataUsed.imageUrl}
        alt="googleImg" width={35} height={35} style={{borderRadius:"10px" ,marginRight:"10px"}}/>{GoogleDataUsed.name} </Navbar.Brand>
       
      }
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

          <Link className="Link"to="/">Home</Link>  

            { logged !== "true" ? <Link  className="Link"to="/Login">Login </Link> : (null)}
            { logged !== "true" ?  <Link  className="Link"to="/RegistrationForm" >
            Signup 
            </Link>: (null)} 
          </Nav>
          <Outlet />
            <Link to="/CartDisplay"><Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg> <sup>{CartNumber}</sup></Button></Link>
{  logged === "true" ? <GoogleAuthLogOut/> : (null)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default NavbarTop;