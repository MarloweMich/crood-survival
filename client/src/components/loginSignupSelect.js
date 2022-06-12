import React, { useState } from "react";
import Login from "../pages/loginPage.js";
import Signup from "../pages/signupPage.js";
import "./loginSignupSelect.css";

const LoginSignupSelect = () => {

  const [select, setSelect] = useState("");

  console.log(select);

  const selection = () => {
    if (select === "signup") {
      return <Signup />
    } 
    else if (select === "login") {
      return <Login />
    }
    else {
      return (
        <div className="LoginSignupSelection">
          <button className="login-signup" onClick={() => setSection("login")}>Login</button>
          <br/>
          <br/>
          <button className="login-signup" onClick={() => setSection("signup")}>Sign up</button>
        </div>
      );
      
    }
  } 
  
  const setSection = (selection) => {return(setSelect(selection))}


  return (
    <div>
      {selection()}
    </div>
  )
};

export default LoginSignupSelect;
