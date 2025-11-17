//import the user schema from the model folder
const User = require('../model/userSchema')

//for encryption
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



//destructuring the user schema for the particular fields required
const registeringUser = async(req,res)=>{
    const{registeredFirstName,registeredLastName,email,password,TandC,role} = req.body

    //for validation purposes
    const existingPassword = await User.findOne({email})

    if(email){
        return res.status(400).json({
            success: false,
            message:'User email already exists'
        })
    }

    
}