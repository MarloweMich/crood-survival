import React, { useState } from "react";
import LosePage from "./lose";
import WinPage from "./win";
import { attrHistory } from "../utils/helper";
import "./Scenario.css";
function Scenario({ array, hero }) {
 //console.log(attrHistory)
  
  const [lives, setLives] = useState(hero.lives);
  // console.log(array)

  function diceRoll(diff) {
   // console.log(diff);
    let roll = Math.floor(Math.random() * 100) + 1;
   // console.log(roll);
    if (roll >= diff) {
      alert("You are SUCCESSFUL in your endeavors and proceed on your path.");
    //  console.log(true);
      return true;
    } else {
      decrementLives(lives);
      alert("You are not SUCCESSFUL in your endeavors. You are weakened. Try again or take the cowards way out.");
     // console.log(false);
      return false;
    }
  }

  function decrementLives() {
    return setLives(lives - 1);
  }

  const [scenario, setScenario] = useState(array[0]);
  // console.log(scenario)

  const determineDifficulty = (index) => {
    let diff = 0;
    if (array[0].difficulty === "easy") {
      switch (scenario) {
        case array[0]:
          diff = 15;
          break
          // return diff;
        case array[1]:
          diff = 25;
          break
          // return diff;
        case array[2]:
          diff = 40;
          // return diff;
      }
    }
    if (array[0].difficulty === "medium") {
      switch (scenario) {
        case array[0]:
          diff = 25;
          break
          // return diff;
        case array[1]:
          diff = 45;
          break
          // return diff;
        case array[2]:
          diff = 55;
          // return diff;
      }
    }
    if (array[0].difficulty === "hard") {
      switch (scenario) {
        case array[0]:
          diff = 40;
          break
          // return diff;
        case array[1]:
          diff = 60;
          break
          // return diff;
        case array[2]:
          diff = 75;
          // return diff;
      }
    }
    console.log("diff1=", diff);
    console.log(array);
    console.log(index);
    console.log(hero);
    console.log(array[index - 1].challengeType);
    if(hero.attributes === array[index - 1].challengeType) {
      // if(hero.attributes.indexOf(array[index -1].challengeType) !== -1){
      diff -= 5
    }
    console.log("diff2=", diff);
    return diff;
  };

  const progressScenario = (index) => {
    return setScenario(index);
  };

  function resolveScenario(scenarioObject,index) {
    if (lives === 0) {
      console.log("game over");
    } else {
      let diff = determineDifficulty(index);
      // console.log(diff);
      console.log(index);
      // progressScenario(index);
      let success = diceRoll(diff);
      if(success) {
        progressScenario(scenarioObject);
      }
    }
  }

  const renderScenario = () => {
    if (lives === 0) {
      return <LosePage />;
    }
    if (scenario === "WINNING") {
      return <WinPage />;
    }
    if (scenario === array[1]) {
      return (
        <div className="scenario" key={array[1].name} style={{backgroundImage: `url(${array[1].backgroundImg})`}}>
          <p className="scenarioName">{array[1].name}</p>
           <h4 className="descBox">{array[1].description}</h4>
           <div className="buttonGroup">
           <button onClick={() => resolveScenario(array[2], 2)}>
             {array[1].choices[0]}
           </button>
           <button onClick={() => progressScenario(array[2],2)}>
             {array[1].choices[1]}
           </button>
           </div>
        </div>
        // <div className="card hover-shadow" key={array[1].name}>
        //   {/* <div style={{background: `url(${array[1].backgroundImg})`}}> */}
        //   <img
        //     className="card-img-top"
        //     src={array[1].backgroundImg}
        //     alt={array[1].name}
        //     width="300px"
        //     height="350px"
        //   />
        //   <p className="scenarioName">{array[1].name}</p>
        //   <p className="scenarioDescription">{array[1].description}</p>
        //   <button onClick={() => resolveScenario(array[2], 2)}>
        //     {array[1].choices[0]}
        //   </button>
        //   <button onClick={() => progressScenario(array[2],2)}>
        //     {array[1].choices[1]}
        //   </button>
        //   {/* </div> */}
        // </div>
      );
    }
    if (scenario === array[2]) {
      return (
        <div className="scenario" key={array[2].name} style={{backgroundImage: `url(${array[2].backgroundImg})`}}>
          <p className="scenarioName">{array[2].name}</p>
           <h4 className="descBox">{array[2].description}</h4>
           <div className="buttonGroup">
           <button onClick={() => resolveScenario("WINNING", 3)}>
             {array[2].choices[0]}
           </button>
           <button onClick={() => progressScenario("WINNING")}>
             {array[2].choices[1]}
           </button>
           </div>
        </div>
        // <div className="card hover-shadow" key={array[2].name}>
        //   <img
        //     className="card-img-top"
        //     src={array[2].backgroundImg}
        //     alt={array[2].name}
        //     width="300px"
        //     height="350px"
        //   />
        //   <p className="scenarioName">{array[2].name}</p>
        //   <p className="scenarioDescription">{array[2].description}</p>
        //   <button onClick={() => resolveScenario("WINNING", 3)}>
        //     {array[2].choices[0]}
        //   </button>
        //   <button onClick={() => progressScenario("WINNING")}>
        //     {array[2].choices[1]}
        //   </button>
        // </div>
      );
    } else {
      return (
        <div className="scenario" key={array[0].name} style={{backgroundImage: `url(${array[0].backgroundImg})`}}>
          <p className="scenarioName">{array[0].name}</p>
           <h4 className="descBox">{array[0].description}</h4>
           <div className="buttonGroup">
           <button onClick={() => resolveScenario(array[1], 1)}>
             {array[0].choices[0]}
           </button>
           <button onClick={() => progressScenario(array[1],1)}>
             {array[0].choices[1]}
           </button>
           </div>
        </div>
        // <div className="card hover-shadow" key={array[0].name}>
        //   <img
        //     className="card-img-top"
        //     src={array[0].backgroundImg}
        //     alt={array[0].name}
        //     width="300px"
        //     height="350px"
        //   />
        //   <p className="scenarioName">{array[0].name}</p>
        //   <p className="scenarioDescription">{array[0].description}</p>
        //   <button onClick={() => resolveScenario(array[1], 1)}>
        //     {array[0].choices[0]}
        //   </button>
        //   <button onClick={() => progressScenario(array[1], 1)}>
        //     {array[0].choices[1]}
        //   </button>
        // </div>
      );
    }
  };

  return <div>{renderScenario()}</div>;
}
export default Scenario;
