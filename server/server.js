const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

const PORT = 6000

app.use(express.json())
const MONGO_KEY = 'mongodb+srv://academy-kit-lms:academy-kit-lms@academy-kit-lms.jzm0ulj.mongodb.net/?appName=academy-kit-lms'
app.use(cors())




mongoose.connect(MONGO_KEY)
.then(()=>console.log('Database is connected successfully')
).catch(()=>console.log('unable to connect to the database'))




app.listen(PORT, ()=>console.log('the server is running at port:', PORT))