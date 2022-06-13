let attrHistory = JSON.parse(localStorage.getItem("addedAttr"))||[];

function attPrompt() {
    const winPrompt = prompt('Congratulations, Select the new attribute you would like to add to your hero from, Strength, Agility , Stealth, Healing');
    attrHistory.push(winPrompt);
    localStorage.setItem ("addedAttr", JSON.stringify(attrHistory ));
    console.log(attrHistory)


    
  }

module.exports = {attrHistory, attPrompt}