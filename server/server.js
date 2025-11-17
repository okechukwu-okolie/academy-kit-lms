require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

const PORT = 6000

app.use(express.json())

app.use(cors())


const database = (databaseKey)=>{

try {
    mongoose.connect(databaseKey)
    console.log('Database connected successfully')
} catch (error) {
    console.log('databse connection failed')
}

}
database(process.env.MONGO_KEY)

// mongoose.connect(process.env.MONGO_KEY)
// .then(()=>console.log('Database is connected successfully')
// ).catch(()=>console.log('unable to connect to the database'))




app.listen(PORT, ()=>console.log('the server is running at port:', PORT))