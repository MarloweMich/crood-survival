const db = require('../config/connection');
const { User, Hero, Scenario} = require('../models');
const heroData = require('./heroData.json');
const scenarioData = require('./scenarioData.json');
const userData = require('./userData.json');

db.once('open', async () => {

    await Hero.deleteMany({});
    await Scenario.deleteMany({});
    await User.deleteMany({});

    const heroes = await Hero.insertMany(heroData);
    const scenarios = await Scenario.insertMany(scenarioData);
    const users = await User.insertMany(userData);

    console.log("Data seeded correctly");
    process.exit(0);
});