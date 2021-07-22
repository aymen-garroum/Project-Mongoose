// SCHEMA AND MODEL PERSON EXPORTED TO SERVER.JS

let mongoose = require('mongoose')

let personSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        age: Number,
        favoriteFoods: [{type: String}]
    }
)

module.exports = mongoose.model('Person', personSchema)