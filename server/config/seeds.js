const db = require('./connection');
const { User, Hero, Scenario} = require('../models');

db.once('open', async () => {

    const heroes = await Hero.InsertMany([
        { name: 'Turok',
          type: 'Hunter',
          lives: '5',
          attributes: ['Stealth', 'Intelligence'],
          description: 'Turok, son of a father killed in battle before his birth and a mother who did not survive childbirth, grew up a loner. Under the sole guidance of the tribal elder, Turok learned quickly to provide for himself by hunting and foraging. Turok possesses all of the necessary skills and knowledge to survive on the move in the wild, his only drawback being his poor ability to work well with others.' 
        },
        { name: 'Brita',
          type: 'Healer',
          lives: '7',
          attributes: ['Leadership', 'Healing'],
          description: 'When a skirmish with a neighboring tribe decimated the population of her tribe, Brita did not hesitate to take charge, the role of Leader coming to her naturally. While leading her tribe to safety, Brita honed both her skills in leadership and in healing. Brita garners the respect of all around her and travelers from tribes far and wide seek out her healing powers. Her demeanor and ability to heal make Brita a necessity for any group.' 
        },
        { name: 'Asbjorn',
          type: 'Tank',
          lives: '10',
          attributes: ['Strength', 'Dexterity'],
          description: 'First born son of the leader of a warrior tribe, Asbjorn was forced to fight his entire life. Trained with weapons since he could walk, Asbjorn grew to become the greatest warrior his tribe has ever known. The size of a bear, Asbjorn is the first person to rush towards a conflict and always the only one to walk away. His size and skills in weaponry make him a crucial asset to any group.' 
        },
        { name: 'Urszula',
          type: 'Assassin',
          lives: '5',
          attributes: ['Speed', 'Resilience'],
          description: 'Youngest sister of Asbjorn, though without the blessing of his enormous size, Urszula was raied around warriors. Not big in stature or overly powerful, Urszula learned quickly that her biggest strength was her speed. Bestowed with Asbjorns spirit of never fleeing a fight, Urszula does not know fear and is not phased by the prospect of defeat. Flying around the battle as a blur, Urszula is a welcomed addition to any party on the roam.' 
        },
    ]);

    const scenarios = await Scenario.InsertMany([
        {
            name: 'El Lago Gigante',
            challengeType: 'easy',
            backgroundImg: '',
            description: 'You come to a large lake. The lake expands as far as you can see in in every direction. This lake is new to you, you are not sure of the depth or the creatures lurking below the surface. The only thing you know for sure is that the quickest way to safety is for you to swim across.Finding a way around may be safer but will add an unknown amount of time to your voyage. Swim or Walk, your choice.',
            choices: ['Swim across the lake', 'Find a way around'],
        },
        {
            name: 'Wayfaring Stranger',
            challengeType: 'easy',
            backgroundImg: 'On your travels, you run across a lone wanderer. There are no signs of physical injuries but the wanderer is in dire need of food and assistance. You do not feel threatened by this individual but in times such as this every resource is crucial. You can help the wanderer with a small amount of your food stores and allow them to join you for a time or you can continue on allowing them to continue fending for themselves. Help or Head out, your choice.',
            description: '',
            choices: ['Help the wanderer', 'Leave them to fend for themselves'],
        },
        {
            name: 'Cave Dive or Nah?',
            challengeType: 'easy',
            backgroundImg: '',
            description: 'After man days and nights on your voyage to safety, you come to a massive wall of rock. The wall stretches to the horizon in both directions and darn near to the sun above you. After further investigation you find the entrance to what seems to be an expansive cave system. All of your experience with caves rightfully makes you hesitate to walk straight in, but you know that where you need to go to reach safety is on the other side of this wall. Do you brave the cave or do you try to find to climb over the wall?',
            choices: ['Explore the Cave', 'Find a way over'],
        },
        {
            name: 'Biggest Mountain Literally Ever',
            challengeType: 'normal',
            backgroundImg: '',
            description: 'For several days now you have seen a monstrous mountain in the distance, towering above everything. Now as you stand at the base looking straight up unable to see the top, you realize that someone put this dang mountain right in your path. You have climbed mountains before, but never anything like this. Up and over is the fastest way to safety especially considering you see no easy way around. Do you strap on your mountain sandals and climb over or do you waste a whole buncha time trying to find a way around? Climb or Scramble, your choice.',
            choices: ['Climb the Mountain', 'Go Around'],
        },
        {
            name: 'Grab N Go',
            challengeType: 'normal',
            backgroundImg: '',
            description: 'You have not eaten in days. As a matter of fact, you have no recollection of even seeing a food thing in the last few days. You stumble quietly (and hungry, duh) up to a small camp. Around a pretty fire you see three wanderers the size of apex predators having a tea party while your body weight in meat slowly cooks over the flames. They have food, you do not. You are starving but they are huge. Eating is quickly become a necessity for you so you have to decide whether to try and steal some of their bounty or try your luck at hunting for food that seemingly no longer exists.',
            choices: ['Steal Food from the Big Scary Trio', 'Take your chances hunting for yourself'],
        },
        {
            name: 'Big Scary Bear Thing',
            challengeType: 'normal',
            backgroundImg: '',
            description: 'As the sun begins to set, you begin to hear the most horrific noises ever to grace your ear holes. As you round a bend in the trail, you stand face to belly button with the biggest creature you have ever seen. CAVE BEAR!!! As the bear begins mentally coming up with a recipe that contains you as the main ingredient, you have a big choice to make and fast. You are starving and you know that a fight with this bear would be to the death ("Fatality" in Mortal Kombat voice). You begin to like the prospects of your other choice, running. As William Wallace will say one day in the distant future, "Fight and you may die, run and you will live... at least for a while", the choice is yours, Fight or Flight?',
            choices: ['Fight the Cave Bear', 'Run for your life']
        },
        {
            name: 'This River Seems Angry',
            challengeType: 'hard',
            backgroundImg: '',
            description: 'You stand at the opening of a valley, confused. You knew this used to be a nice valley, but now it has seemingly been ingested by the angriest river on earth. As the big ice melts rapidly higher in the range you know that the river will not cease its rage. You have to cross this valley and now unfortunately, this ticked off river. Swimming across is definitely not a good idea, but in the case of time, it is the best idea. Do you take your chances and swim across or do you try to find a safer way across?',
            choices: ['Cross the super angry river', 'Look for a bridge or bridge type thing'],
        },
        {
            name: 'U Wanna Go Bro?',
            challengeType: 'hard',
            backgroundImg: '',
            description: 'The trail you travel leads between to boulders. One is a huge boulder, the other would probably be described better as a kind of big rock. As you approach, you see something behind the kind of big rock. Three wanderers pop out to surprise you, confirming your suspicion that there was indeed someone hiding behind the kind of big rock. The three approach you as you try to figure out in your head why on earth they tried to hide the biggest guy you have ever seen behind what is essentially little more than a pebble. Their intentions are made clear rather quickly, they want all of your belongings, and are willing to take them by force. The choice is yours, fight this group of angry wanderers, or drop your stuff and get out of town.',
            choices: ['Fight The Wanderers', 'Skidaddle'],
        },
        {
            name: 'Hopscotch For Your Life',
            challengeType: 'hard',
            backgroundImg: '',
            description: 'You could have sworn you were almost there, you just knew that safety was just a little ways away. But the local volcano had a different idea as your path is now directly through an active lava field. Lava is spicy, but like, not the good kind. Obviously not having to go through a lava field would be ideal, but safety is literally on the other side. You notice a few sporadically placed boulders throughout the bubbly lava and remember your days in elementary cave school, you have practiced for this exact scenario (who says PE is useless?!) Do you try and make it across jumping from rock to rock to safety, or do you go around the field safely but slowly?',
            choices: ['Hopscotch the Lave Field', 'Go around'],
        }
    ]);


});