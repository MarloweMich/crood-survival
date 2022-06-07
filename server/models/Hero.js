const { Schema, model } = require ('mongoose')

const heroSchema = new Schema ({
    ID:{
        type: Number,

    },
    name:{
        type: String,

    },
    type:{
        type: String,

    },
    attributes:{
        type : String, 

    },
    lives:{

        type: Number,
    },
    description:{

        type: String,
        minlength: 1,
        maxlength:280,

    },
})
const Hero = model ('Hero', heroSchema);

module.exports = Hero;
