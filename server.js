
//Imports
const express = require('express')//import express
const app = express()//create app object.
require('dotenv').config()//get .env variables
const {PORT = 3001, DATABASE_URL}=process.env


//Middleware Imports
const cors =require('cors')
const morgan =require('morgan')

//Use Middleware Imports
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//Routes//Routers

app.get("/", (req,res)=>{
  res.json({
    response:"Hello World"
  })
})


//Listener
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})