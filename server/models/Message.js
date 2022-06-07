const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    sender: {
        type: String,
        unique: true,
        trim: true,
    },
    text: {
        type: String,
        minlength: 1,
        maxlength: 200,
        trim: true,
    }
});

const Message = model("Message", messageSchema);

module.exports = Message;