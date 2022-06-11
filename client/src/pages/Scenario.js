import React, { useState } from "react";
import LosePage from "./lose";


function Scenario({array, hero}) {

  const [lives, setLives] = useState(hero.lives);
  // console.log(lives)

  function diceRoll(diff) {
    let roll = Math.floor(Math.random() * 50 ) + 1;
    if (roll >= diff) {
        console.log(true)
        return true
    } else {
        decrementLives(lives)
        console.log(false)
        return false
    }
  };
  
  function decrementLives() {
    // if (lives === 0) {
    //   return <LosePage />
    // } else {
    return setLives(lives-1)
    // }
  } 

  console.log(lives)

  const [scenario, setScenario] = useState(array[0])

  const progressScenario = (index) => {
    return setScenario(index);
  }

  function resolveScenario(index, diff) {
    progressScenario(index);
    diceRoll(diff);
  };


  const renderScenario = () => {
    if (scenario === array[1]) {
      return (
        <div className='card hover-shadow' key={array[1].name}>
                     <img className="card-img-top" src={array[1].backgroundImg}
                         alt={array[1].name}
                         width="300px"
                         height="350px"
                    />
                    <p className='scenarioName'>{array[1].name}</p>
                    <p className='scenarioDescription'>{array[1].description}</p>
                    <button onClick={() => resolveScenario(array[0], 30)}>{array[1].choices[0]}</button>
                    <button onClick={() => progressScenario(array[2])}>{array[1].choices[1]}</button>
                </div>
      );
    }
    if (scenario === array[2]) {
      return (
        <div className='card hover-shadow' key={array[2].name}>
                     <img className="card-img-top" src={array[2].backgroundImg}
                         alt={array[2].name}
                         width="300px"
                         height="350px"
                    />
                    <p className='scenarioName'>{array[2].name}</p>
                    <p className='scenarioDescription'>{array[2].description}</p>
                    <button onClick={() => resolveScenario(array[0], 30)}>{array[2].choices[0]}</button>
                    <button onClick={() => progressScenario(array[0])}>{array[2].choices[1]}</button>
                </div>
      );
    } else {
      return (
        <div className='card hover-shadow' key={array[0].name}>
                     <img className="card-img-top" src={array[0].backgroundImg}
                         alt={array[0].name}
                         width="300px"
                         height="350px"
                    />
                    <p className='scenarioName'>{array[0].name}</p>
                    <p className='scenarioDescription'>{array[0].description}</p>
                    <button onClick={() => resolveScenario(array[0], 30)}>{array[0].choices[0]}</button>
                    <button onClick={() => progressScenario(array[1])}>{array[0].choices[1]}</button>
                </div>
      );
    }
  }

  return (
    <div>
      {renderScenario()}
    </div>
  );
}
export default Scenario;
