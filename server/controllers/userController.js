//import the user schema from the model folder
const User = require('../model/userSchema')

//for encryption
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



//destructuring the user schema for the particular fields required
const registeringUser = async(req,res)=>{
    const{registeredFirstName,registeredLastName,email,password,TandC,role} = req.body

    //for validation purposes
    const existingEmail = await User.findOne({email})

    if(existingEmail){
        return res.status(400).json({
            success: false,
            message:'User email already exists'
        })
    }

    //hashing the password for security purpose
    const hashedPassword = await bcrypt.hash(password,5)

    //creating a new instance of the registered user
    const newUser = new User({
        registeredFirstName,
        registeredLastName,
        email,
        hashedPassword,
        TandC,
        role
    })

    //saving the new instance of the user
    await newUser.save()

    return res.status(201).json({
        success:true,
        message:' User registered successfully!!'
    })

}













module.exports = {registeringUser}