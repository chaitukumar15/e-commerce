import React from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";
import axios from "axios";
import {googleData} from "../redux/actions/actions"
import {useDispatch} from "react-redux"
let  GoogleAuthLogIn=()=>{

    let dispatch= useDispatch()

    let success=(val)=>{
console.log(val);
dispatch(googleData(val.profileObj));
axios.post("https://fakestoreapi.com/users",val.profileObj).then(val=>console.log(val));
sessionStorage.setItem("logged", "true");
    }


    let failure=(err)=>{
        console.log(err);
        }
    return(
        <>
         <GoogleLogin 
        clientId="646026352346-0cu3opsdi9c86movpkmin8jakro3lb62.apps.googleusercontent.com"
        buttonText="login"
        onSuccess={success}
        onFailure={failure}
        cookiePolicy={'single_host_origin'}/>
        </>
    )
}

let GoogleAuthLogOut=()=>{


    let logout=()=>{

        sessionStorage.clear();
        window.location.reload();

    }
    return(
        <>
        <GoogleLogout
         clientId="646026352346-0cu3opsdi9c86movpkmin8jakro3lb62.apps.googleusercontent.com"
         buttonText="Logout"
      onLogoutSuccess={logout}/>
        </>
    )
}

export {GoogleAuthLogOut,GoogleAuthLogIn};