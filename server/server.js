require('dotenv').config()
const express = require('express');

const app=express()

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser: true})
db=mongoose.connection

db.on('error',(error)=>(console.log(error)))
db.once('open',()=>(console.log("Succesful")))

app.use(express.json())

const pizza=require('./routes/pizza')

app.use("/menu",pizza)

app.listen(5000,()=>{
    console.log("Listening on 5000");
})