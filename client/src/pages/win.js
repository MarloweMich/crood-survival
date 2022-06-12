import React from "react";
import "./win.css";

function WinPage() {

    function changeLocation() {
      window.location.assign('')
    }

  return (
    <div className="container">
      <h1>Congratulations!</h1>
      <button className="btn btn-lg btn-light m-2" onClick={()=>changeLocation()}>
        Play Again?
      </button>
    </div>
  );
}

export default WinPage;
