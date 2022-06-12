import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./characterSelect.css";
import PathSelection from "./PathSelection";

const heroes = [
  {
    name: "Turok",
    type: "Hunter",
    lives: 5,
    attributes: "Stealth",
    description:
      "Turok, son of a father killed in battle before his birth and a mother who did not survive childbirth, grew up a loner. Under the sole guidance of the tribal elder, Turok learned quickly to provide for himself by hunting and foraging. Turok possesses all of the necessary skills and knowledge to survive on the move in the wild, his only drawback being his poor ability to work well with others.",
    heroImg: "https://drive.google.com/uc?id=1eHhWQvy63elhvD0QYnfOjB1LBOERiwMq",
  },
  {
    name: "Brita",
    type: "Healer",
    lives: 7,
    attributes: "Healing",
    description:
      "When a skirmish with a neighboring tribe decimated the population of her tribe, Brita did not hesitate to take charge, the role of Leader coming to her naturally. While leading her tribe to safety, Brita honed both her skills in leadership and in healing. Brita garners the respect of all around her and travelers from tribes far and wide seek out her healing powers. Her demeanor and ability to heal make Brita a necessity for any group.",
    heroImg: "https://drive.google.com/uc?id=1_7Lc8lukEUC4iPmV0Xoum7ZMOiOuDkI7",
  },
  {
    name: "Asbjorn",
    type: "Tank",
    lives: 10,
    attributes: "Strength",
    description:
      "First born son of the leader of a warrior tribe, Asbjorn was forced to fight his entire life. Trained with weapons since he could walk, Asbjorn grew to become the greatest warrior his tribe has ever known. The size of a bear, Asbjorn is the first person to rush towards a conflict and always the only one to walk away. His size and skills in weaponry make him a crucial asset to any group.",
    heroImg: "https://drive.google.com/uc?id=1RfRQn4YbDDsSoOozno_KwYCU6v6jnshH",
  },
  {
    name: "Urszula",
    type: "Assassin",
    lives: 5,
    attributes: "Speed",
    description:
      "Youngest sister of Asbjorn, though without the blessing of his enormous size, Urszula was raied around warriors. Not big in stature or overly powerful, Urszula learned quickly that her biggest strength was her speed. Bestowed with Asbjorns spirit of never fleeing a fight, Urszula does not know fear and is not phased by the prospect of defeat. Flying around the battle as a blur, Urszula is a welcomed addition to any party on the roam.",
    heroImg: "https://drive.google.com/uc?id=1JupjZ7eJ5EcRamTjExNkB1Cbpk2ICuRP",
  },
];

function CharacterSelect() {

  const [character, setCharacter] = useState("");

  const renderHero = () => {
    if (character === heroes[0]) {
      return <PathSelection hero={heroes[0]} />;
    }
    if (character === heroes[1]) {
      return <PathSelection hero={heroes[1]} />;
    }
    if (character === heroes[2]) {
      return <PathSelection hero={heroes[2]} />;
    }
    if (character === heroes[3]) {
      return <PathSelection hero={heroes[3]} />;
    } else {
      return (
        <div className="cardContainer">
          {heroes.map((hero) => (
            <div className="card hover-shadow" key={hero.id}>
              {/* <h6>{hero.title}</h6> */}
              <img
                className="card-img-top"
                src={hero.heroImg}
                alt={hero.heroImg}
                width="250px"
                height="350px"
              />
              <p className="heroType">Type: {hero.type}</p>
              <p className="heroAttribute">Attribute: {hero.attributes}</p>
              <p className="heroLives">Lives: {hero.lives}</p>
              <p className="heroDescription">Description: {hero.description}</p>
              <button onClick={() => chooseChar(hero)} id='chooseHero' className="chooseHero">Choose {hero.name}</button>
            </div>
          ))}
        </div>
      );
    }
  };

  const chooseChar = (hero) => { 
    window.localStorage.setItem("heroData",JSON.stringify(hero))

    return setCharacter(hero);
  };


  return (
  <div>
    {renderHero()}
  </div>
);
}

export default CharacterSelect;
