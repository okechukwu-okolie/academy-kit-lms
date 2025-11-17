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

}













module.exports = {registeringUser}