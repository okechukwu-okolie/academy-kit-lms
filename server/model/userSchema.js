const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    registeredFirstName:String,
    registeredLastName:String,
    email:String,
    password:String,
    TandC:Boolean,
    role:String
})

module.exports = mongoose.model('User', userSchema)

