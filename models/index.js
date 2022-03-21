const mongoose = require('mongoose');

const indexSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        unique: true
    },
})

module.exports = mongoose.model('User', indexSchema)