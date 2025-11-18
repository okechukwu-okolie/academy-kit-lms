//import express
const express = require('express')


//import the controller
const {registeringUser,loginUser} = require('../controllers/userController')

//import the middleware
const authenticateMiddleware = require('../middleware/middleware')



//create a variable to hold the express router
const router = express.Router()





//the post is used to send data to the database
router.post('/register', registeringUser)

//this is the route to the login
router.post('/login',loginUser)




router.get('/check-auth', authenticateMiddleware, (req,res)=>{
    const user = req.user;
    res.status(200).json({
        success:true,
        message:'User is authenticated',
        data:{
            user,
        }
    })
})




module.exports = router