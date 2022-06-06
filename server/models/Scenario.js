const { Schema, model } = require ('mongoose')

const scenarioSchema = new Schema({
    name :{
        type: String,
    },

    challengeType :{
        type: String,
    },

    backgroundImg:{
        type: String,
    },

    description :{
        type: String,
    },

    choices:{
        type: Array,
    },

})
const Scenario = model ('Scenario',scenarioSchema)

module.exports = Scenario;