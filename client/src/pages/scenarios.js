import React from 'react';
import "./scenarios.css"

const scenarios = [
    {
        "name": "El Lago Gigante",
        "challengeType": "easy",
        "backgroundImg": "https://drive.google.com/uc?id=1G6if_hM4IwBVcpc5m02P0dEBR0wetgC8",
        "description": "You come to a large lake. The lake expands as far as you can see in in every direction. This lake is new to you, you are not sure of the depth or the creatures lurking below the surface. The only thing you know for sure is that the quickest way to safety is for you to swim across.Finding a way around may be safer but will add an unknown amount of time to your voyage. Swim or Walk, your choice.",
        "choices": ["Swim across the lake", "Find a way around"]
    },
    {
        "name": "Wayfaring Stranger",
        "challengeType": "easy",
        "backgroundImg": "https://drive.google.com/uc?id=1LpCEVh_i5Jh7jsgaLeMghKCPTWrpiSW8",
        "description": "On your travels, you run across a lone wanderer. There are no signs of physical injuries but the wanderer is in dire need of food and assistance. You do not feel threatened by this individual but in times such as this every resource is crucial. You can help the wanderer with a small amount of your food stores and allow them to join you for a time or you can continue on allowing them to continue fending for themselves. Help or Head out, your choice.",
        "choices": ["Help the wanderer", "Leave them to fend for themselves"]
    },
    {
        "name": "Cave Dive or Nah?",
        "challengeType": "easy",
        "backgroundImg": "https://drive.google.com/uc?id=1QayHDYh-cRJp7oROEKupxOZlNeUon2qS",
        "description": "After man days and nights on your voyage to safety, you come to a massive wall of rock. The wall stretches to the horizon in both directions and darn near to the sun above you. After further investigation you find the entrance to what seems to be an expansive cave system. All of your experience with caves rightfully makes you hesitate to walk straight in, but you know that where you need to go to reach safety is on the other side of this wall. Do you brave the cave or do you try to find to climb over the wall?",
        "choices": ["Explore the Cave", "Find a way over"]
    },
    {
        "name": "Biggest Mountain Literally Ever",
        "challengeType": "normal",
        "backgroundImg": "https://drive.google.com/uc?id=1W9hjAci24HwSB5KPAbKCL8c_-ie5Q4O-",
        "description": "For several days now you have seen a monstrous mountain in the distance, towering above everything. Now as you stand at the base looking straight up unable to see the top, you realize that someone put this dang mountain right in your path. You have climbed mountains before, but never anything like this. Up and over is the fastest way to safety especially considering you see no easy way around. Do you strap on your mountain sandals and climb over or do you waste a whole buncha time trying to find a way around? Climb or Scramble, your choice.",
        "choices": ["Climb the Mountain", "Go Around"]
    },
    {
        "name": "Grab N Go",
        "challengeType": "normal",
        "backgroundImg": "https://drive.google.com/uc?id=1ihbNnVKL2E1p3UfE0tg7ot8YYrZ6sPrd",
        "description": "You have not eaten in days. As a matter of fact, you have no recollection of even seeing a food thing in the last few days. You stumble quietly (and hungry, duh) up to a small camp. Around a pretty fire you see three wanderers the size of apex predators having a tea party while your body weight in meat slowly cooks over the flames. They have food, you do not. You are starving but they are huge. Eating is quickly become a necessity for you so you have to decide whether to try and steal some of their bounty or try your luck at hunting for food that seemingly no longer exists.",
        "choices": ["Steal Food from the Big Scary Trio", "Take your chances hunting for yourself"]
    },
    {
        "name": "Big Scary Bear Thing",
        "challengeType": "normal",
        "backgroundImg": "https://drive.google.com/uc?id=12XCjmOCcnrMwlSYx59x23f-ZHV7AZdn7",
        "description": "As the sun begins to set, you begin to hear the most horrific noises ever to grace your ear holes. As you round a bend in the trail, you stand face to belly button with the biggest creature you have ever seen. CAVE BEAR!!! As the bear begins mentally coming up with a recipe that contains you as the main ingredient, you have a big choice to make and fast. You are starving and you know that a fight with this bear would be to the death ('Fatality' in Mortal Kombat voice). You begin to like the prospects of your other choice, running. As William Wallace will say one day in the distant future, 'Fight and you may die, run and you will live... at least for a while', the choice is yours, Fight or Flight?",
        "choices": ["Fight the Cave Bear", "Run for your life"]
    },
    {
        "name": "This River Seems Angry",
        "challengeType": "hard",
        "backgroundImg": "https://drive.google.com/uc?id=1hbfTUfzDjsM42GGbd76ZoyxND_gYgv32",
        "description": "You stand at the opening of a valley, confused. You knew this used to be a nice valley, but now it has seemingly been ingested by the angriest river on earth. As the big ice melts rapidly higher in the range you know that the river will not cease its rage. You have to cross this valley and now unfortunately, this ticked off river. Swimming across is definitely not a good idea, but in the case of time, it is the best idea. Do you take your chances and swim across or do you try to find a safer way across?",
        "choices": ["Cross the super angry river", "Look for a bridge or bridge type thing"]
    },
    {
        "name": "U Wanna Go Bro?",
        "challengeType": "hard",
        "backgroundImg": "https://drive.google.com/uc?id=1hvAme3GZpd6cTDiEPuFKsDg15ufZawMi",
        "description": "The trail you travel leads between to boulders. One is a huge boulder, the other would probably be described better as a kind of big rock. As you approach, you see something behind the kind of big rock. Three wanderers pop out to surprise you, confirming your suspicion that there was indeed someone hiding behind the kind of big rock. The three approach you as you try to figure out in your head why on earth they tried to hide the biggest guy you have ever seen behind what is essentially little more than a pebble. Their intentions are made clear rather quickly, they want all of your belongings, and are willing to take them by force. The choice is yours, fight this group of angry wanderers, or drop your stuff and get out of town.",
        "choices": ["Fight The Wanderers", "Skidaddle"]
    },
    {
        "name": "Hopscotch For Your Life",
        "challengeType": "hard",
        "backgroundImg": "https://drive.google.com/uc?id=13j6K28zT9PEVpDPC91oPQ2UR8kN8LBZN",
        "description": "You could have sworn you were almost there, you just knew that safety was just a little ways away. But the local volcano had a different idea as your path is now directly through an active lava field. Lava is spicy, but like, not the good kind. Obviously not having to go through a lava field would be ideal, but safety is literally on the other side. You notice a few sporadically placed boulders throughout the bubbly lava and remember your days in elementary cave school, you have practiced for this exact scenario (who says PE is useless?!) Do you try and make it across jumping from rock to rock to safety, or do you go around the field safely but slowly?",
        "choices": ["Hopscotch the Lava Field", "Go around"]
    }
]


function ScenarioSelect(props) {

    return (
        <div className='cardContainer'>
            {scenarios.map(scenario => (
                <div className='card hover-shadow' key={scenario.name}>
                <img className="card-img-top" src={scenario.backgroundImg}
                     alt={scenario.backgroundImg}
                     width="300px"
                     height="350px"
                />
                <p className='scenarioName'>{scenario.name}</p>
                <p className='scenarioDescription'>{scenario.description}</p>
                <p className='scenarioChoices'>Choices: {scenario.choices[0]} or {scenario.choices[0]}</p>
            </div>
         ))}
    </div>
    )
}

export default ScenarioSelect;