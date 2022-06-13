import React from "react";
import "./win-lose.css";
import {attPrompt} from "../utils/helper"


function WinPage() {

  function changeLocation() {
    window.location.assign('')
    attPrompt()
  }

  return (

    <div className="formBox">
      <div className="featureArea">
          <h1>Congratulations!</h1>
          <br></br>
          <br></br>
          <button className="play-again-button" onClick={()=>changeLocation()}>
            Play Again?
          </button>
        </div>
    </div>
  );

}

export default WinPage;

