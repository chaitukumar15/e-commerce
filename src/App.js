import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTop from "./components/navbar";
import LogIn from "./components/login";
import RegistrationForm from "./components/registerForm";
import Footer from "./components/footer";
import Display from "./components/home";
import CartDisplay from "./components/cartDisplay";
import Dummy from "./components/dummy";

function App() {
  return (
   <>

  
   <BrowserRouter>
   <NavbarTop/>
   <Routes>
    <Route path="/" element={<Display/>}/>
    <Route path="/LogIn" element={<LogIn/>}/>
    <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
    <Route path="/CartDisplay" element={<CartDisplay/>}/>
    <Route path="*" element={<Dummy/>}/>
  </Routes>
   </BrowserRouter>
   
<Footer/>
   </>
  );
}

export default App;
