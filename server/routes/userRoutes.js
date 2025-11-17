//import express
const express = require('express')

//import the controller
const {registeringUser} = require('../controllers/userController')

//create a variable to hold the express router
const router = express.Router()

//the post is used to send data to the database
router.post('/register', registeringUser)


module.exports = router