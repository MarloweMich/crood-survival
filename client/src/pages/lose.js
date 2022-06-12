import React from "react";
import { Link } from 'react-router-dom';
import "./lose.css";



function LosePage() {
  function changeLocation() {
    window.location.assign('')
  }

  return (
    <div className="container">
      <h1>Condolances!</h1>
      <button className="btn btn-lg btn-light m-2" onClick={()=>changeLocation()}>
        Play Again?
      </button>
    </div>
  );
}

export default LosePage;
