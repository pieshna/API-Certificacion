const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    imagen: {
        type: String,
        required: true,
        minlength: 6
    },
    rol: {
        type: String,
        required: true,
        minlength: 3
    },
    date: {
        type: Date,
        default: Date.now
    },
    edited: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);