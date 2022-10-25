import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./components.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


let RegistrationForm=()=>{

let [UserEmpty,setUserEmpty]=useState("")
  let [UserRegister,setUserRegister]=useState({

    emailId:"",
    password:"",
    passwordConform:""
    })
let HandleChange=(e)=>{

  let detail={...UserRegister}
  detail[e.target.name]=e.target.value;
  setUserRegister(detail);
  console.log(UserRegister);
}
let HandleSubmit=(e)=>{
e.preventDefault();

axios.post("https://fakestoreapi.com/users",UserRegister).then(val=>console.log(val));
toast("you have registered");
UserRegister.emailId="";
UserRegister.passwordConform="";
}
    return(
        <>
        <div className="formInput">
            <h1>SignUp </h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="emailId"  onChange={HandleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={HandleChange}/>
     
      <Form.Label>conform Password</Form.Label>
        <Form.Control  type="password" placeholder="conform Password" name="passwordConform" onChange={HandleChange} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={HandleSubmit}>
      <ToastContainer />
        Submit
      </Button>
    </Form>
        </div>
        </>
    )
}
export default RegistrationForm;