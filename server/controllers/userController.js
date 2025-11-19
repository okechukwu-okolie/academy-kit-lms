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
        password:hashedPassword,
        TandC:true,
        role
    })

    //saving the new instance of the user
    await newUser.save()

    return res.status(201).json({
        success:true,
        message:' User registered successfully!!'
    })

}

//function to handle the login-in of users
const loginUser = async(req,res)=>{
    //destructuring the body for the required schema properties
    const {email, password} = req.body

    //check for the user email in the database
    const checkUser = await User.findOne({email})

    //check for the email and if the hashed password compares to the actual password
    if(!checkUser ){
        return res.status(401).json({
            success: false,
            message:'This email and password does not exist'
        })}

        const isMatch = await bcrypt.compare(password,checkUser.password)

         if(!isMatch ){
        return res.status(401).json({
            success: false,
            message:'This email and password does not exist'
        })}

    //here a token is generated to defin this user in this session of their login
    const accessToken = jwt.sign(
        //this is the user defined payload
        {
        _id: checkUser.id,
        registeredFirstName: checkUser.registeredFirstName,
        registeredLastName: checkUser.registeredLastName,
        email:checkUser.email,
        role:checkUser.role
    },
    //this is a secret key 
    'JWT_SECRET',
    //this is a duration for the token key to last for
    {expiresIn:'1d'}
)

res.status(200).json({
    success:true,
    message:'User login successful',

    data:{
        accessToken,
        user:{
         _id: checkUser.id,
        registeredFirstName: checkUser.registeredFirstName,
        registeredLastName: checkUser.registeredLastName,
        email:checkUser.email,
        role:checkUser.role
        }
    }
})

}

const anotherLogin =async(req,res)=>{
    const {email,password}= req.body

    const checkUser = await User.findOne({email})

    if(!checkUser){
        return res.status(400).json({
            success: false,
            message:'this email does nnot exist'
        })
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password)
    if(!checkPassword){
        return res.status(400).json({
            success:false,
            message:'this password does not exist.'
        })
    }

    //here we are creating the access token
    const accessToken = jwt.sign({
        _id:checkUser.id,
        registeredFirstName:checkUser.registeredFirstName,
        registeredLastName:checkUser.registeredLastName,
        email:checkUser.email,
        role:checkUser.role
    },'SECRET_KEY',{expiresIn:'1d'})

    return res.status(200).json({
        success:true,
        message:'user sucessfully logged in',
        data:{
            accessToken,
            user:{
                _id:checkUser.id,
        registeredFirstName:checkUser.registeredFirstName,
        registeredLastName:checkUser.registeredLastName,
        email:checkUser.email,
        role:checkUser.role
            }
        }
    })
}





module.exports = {registeringUser, loginUser, anotherLogin}