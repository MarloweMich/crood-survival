const { Schema, model } = require ('mongoose')

const scenarioSchema = new Schema({
    name :{
        type: String,
    },

    challengetype :{
        type: String,
    },

    backgroundimg:{
        type: String,
    },

    description :{
        type: String,
    },

    choices:{
        type: String,
    },

})
const Scenario = model ('Scenario',scenarioSchema)

module.exports = Scenario;