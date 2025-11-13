const express = require('express')


const app = express()

const PORT = 6000

app.use(express.json())



app.listen(PORT, ()=>console.log('the server is running at port:', PORT))