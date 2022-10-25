import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./components.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from "react-redux"
import {GoogleAuthLogIn,GoogleAuthLogOut} from "./googleAuth.js"
let LogIn=()=>{

  let logged=sessionStorage.getItem("logged");
  console.log(logged);
let [ValueChange,setValueChange]=useState({
  email:"",
  password:""
})
let HandleChange=(e)=>{
  let detail={...ValueChange}
  detail[e.target.name]=e.target.value;
  setValueChange(detail);
  console.log(ValueChange);

}
let HandleSubmit=(e)=>{
  alert("hello")
e.preventDefault();
toast("successfully logged")

}
    return(
        <>

        
        <div className="formInput">
          <h2>Login</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={HandleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={HandleChange} />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={HandleSubmit}>
        Submit
      </Button>
      <ToastContainer />
    </Form>
    <p>login with google</p>
         <GoogleAuthLogIn/>
        </div>
        </>
    )
}
export default LogIn