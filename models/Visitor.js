const mongoose = require('mongoose')

const Visitor = mongoose.model('Visitor', {
    name: String,
    description: String
})

module.exports = Visitor