import React from "react";
import "./win.css";
import {attPrompt} from "../utils/helper"


function WinPage() {


  // function attPrompt() {
  //   let attrHistory = JSON.parse(localStorage.getItem("addedAttr"))||[];
  //   const winPrompt = prompt('Congratulations, Select the new attribute you would like to add to your hero from, Stregnth, Agility , Stealth, Healing');
  //   attrHistory.push(winPrompt);
  //   localStorage.setItem ("addedAttr", JSON.stringify(attrHistory ));
  //   console.log(attrHistory)


    
  // }



  function changeLocation() {
    window.location.assign('')
    attPrompt()
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
