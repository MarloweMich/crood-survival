const db = require('./connection');
const { User, Hero } = require('../models');

db.once('open', async () => {
    // clean database
    await School.deleteMany({});
    await Class.deleteMany({});
    await Professor.deleteMany({});
  
    // bulk create each model
    const schools = await School.insertMany(schoolData);
    const classes = await Class.insertMany(classData);
    const professors = await Professor.insertMany(professorData);
  
  });