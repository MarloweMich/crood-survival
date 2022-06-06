const db = require('../config/connection');
const { User, Hero, Scenario} = require('../models');
const heroData = require('./heroData.json');
const scenarioData = require('./scenarioData.json');

db.once('open', async () => {

    await Hero.deleteMany({});
    await Scenario.deleteMany({});

    const heroes = await Hero.insertMany(heroData);

    const scenarios = await Scenario.insertMany(scenarioData);

    console.log("Data seeded correctly");
    process.exit(0);
});