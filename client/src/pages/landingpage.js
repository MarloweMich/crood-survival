import React from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import "./landingpage.css";

function LandingPage() {

  return (
    <>
      <div className="formBox">
        <Login />
      </div>
      <div className="formBox">
        <Signup />
      </div>
    </>
  );
}

export default LandingPage;
