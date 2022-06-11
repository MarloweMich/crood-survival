import React, { useState } from "react";

function Scenario(scenArray, hero) {
  console.log(scenArray);

  const [scenario, setScenario] = useState(scenArray.array[0])

  // function resolveScenario(index, diff) {
  //   progressScenario(index)
  //   diceroll(diff)
  // }

  console.log(scenario)

  const renderScenario = () => {
    if (scenario === scenArray.array[1]) {
      return (
        <div className='card hover-shadow' key={scenArray.array[1].name}>
                     <img className="card-img-top" src={scenArray.array[1].backgroundImg}
                         alt={scenArray.array[1].name}
                         width="300px"
                         height="350px"
                    />
                    <p className='scenarioName'>{scenArray.array[1].name}</p>
                    <p className='scenarioDescription'>{scenArray.array[1].description}</p>
                    {/* <p className='scenarioChoices'>Choices: {scenArray.array[2].choices[2]} or {scenArray.array[2].choices[1]}</p> */}
                    <button onClick={() => progressScenario(scenArray.array[2])}>{scenArray.array[1].choices[0]}</button>
                    <button onClick={() => progressScenario(scenArray.array[2])}>{scenArray.array[1].choices[1]}</button>
                </div>
      );
    }
    if (scenario === scenArray.array[2]) {
      return (
        <div className='card hover-shadow' key={scenArray.array[2].name}>
                     <img className="card-img-top" src={scenArray.array[2].backgroundImg}
                         alt={scenArray.array[2].name}
                         width="300px"
                         height="350px"
                    />
                    <p className='scenarioName'>{scenArray.array[2].name}</p>
                    <p className='scenarioDescription'>{scenArray.array[2].description}</p>
                    {/* <p className='scenarioChoices'>Choices: {scenArray.array[2].choices[2]} or {scenArray.array[2].choices[1]}</p> */}
                    <button onClick={() => progressScenario(scenArray.array[0])}>{scenArray.array[2].choices[0]}</button>
                    {/* <button onClick={() => resolveScenario(scenArray.array[0], 30)}>{scenArray.array[2].choices[0]}</button> */}
                    <button onClick={() => progressScenario(scenArray.array[0])}>{scenArray.array[2].choices[1]}</button>
                </div>
      );
    } else {
      return (
        <div className='card hover-shadow' key={scenArray.array[0].name}>
                     <img className="card-img-top" src={scenArray.array[0].backgroundImg}
                         alt={scenArray.array[0].name}
                         width="300px"
                         height="350px"
                    />
                    <p className='scenarioName'>{scenArray.array[0].name}</p>
                    <p className='scenarioDescription'>{scenArray.array[0].description}</p>
                    {/* <p className='scenarioChoices'>Choices: {scenArray.array[2].choices[2]} or {scenArray.array[2].choices[1]}</p> */}
                    <button onClick={() => progressScenario(scenArray.array[1])}>{scenArray.array[0].choices[0]}</button>
                    <button onClick={() => progressScenario(scenArray.array[1])}>{scenArray.array[0].choices[1]}</button>
                </div>
      );
    }
  }

const progressScenario = (index) => {
  return setScenario(index);
}
    

  // const firstScenario = () => {
  //   console.log(scenArray.array[0])
  //   return (
  //     <div className='card hover-shadow' key={scenArray.array[0].name}>
  //               <img className="card-img-top" src={scenArray.array[0].backgroundImg}
  //                    alt={scenArray.array[0].backgroundImg}
  //                    width="300px"
  //                    height="350px"
  //               />
  //               <p className='scenarioName'>{scenArray.array[0].name}</p>
  //               <p className='scenarioDescription'>{scenArray.array[0].description}</p>
  //               {/* <p className='scenarioChoices'>Choices: {scenArray.array[0].choices[0]} or {scenArray.array[0].choices[1]}</p> */}
  //               <button onClick={() => {secondScenario()}}>{scenArray.array[0].choices[0]}</button>
  //               <button onClick={() => {secondScenario()}}>{scenArray.array[0].choices[1]}</button>
  //           </div>
  //   )
  // }
  // const secondScenario = () => {
  //   console.log(scenArray.array[1])
  //   setScenario(true)
  //   // return (
  //   //   // <div className='card hover-shadow' key={scenArray.array[1].name}>
  //   //   //           <img className="card-img-top" src={scenArray.array[1].backgroundImg}
  //   //   //                alt={scenArray.array[1].backgroundImg}
  //   //   //                width="300px"
  //   //   //                height="350px"
  //   //   //           />
  //   //   //           <p className='scenarioName'>{scenArray.array[1].name}</p>
  //   //   //           <p className='scenarioDescription'>{scenArray.array[1].description}</p>
  //   //   //           {/* <p className='scenarioChoices'>Choices: {scenArray.array[1].choices[1]} or {scenArray.array[1].choices[1]}</p> */}
  //   //   //           <button onClick={() => {thirdScenario()}}>{scenArray.array[1].choices[0]}</button>
  //   //   //           <button onClick={() => {thirdScenario()}}>{scenArray.array[1].choices[1]}</button>
  //   //   //       </div>
  //   // )
  // }
  // const thirdScenario = () => {
  //   return (
  //     <div className='card hover-shadow' key={scenArray.array[2].name}>
  //               <img className="card-img-top" src={scenArray.array[2].backgroundImg}
  //                    alt={scenArray.array[2].backgroundImg}
  //                    width="300px"
  //                    height="350px"
  //               />
  //               <p className='scenarioName'>{scenArray.array[2].name}</p>
  //               <p className='scenarioDescription'>{scenArray.array[2].description}</p>
  //               {/* <p className='scenarioChoices'>Choices: {scenArray.array[2].choices[2]} or {scenArray.array[2].choices[1]}</p> */}
  //               <button>{scenArray.array[2].choices[0]}</button>
  //               <button>{scenArray.array[2].choices[1]}</button>
  //           </div>
  //   )
  // }

  return (
    <div>
      {renderScenario()}
    </div>
  );
}
export default Scenario;
