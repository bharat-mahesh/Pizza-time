const mongoose = require('mongoose');

const pizzaSchema=mongoose.Schema({
name:{
    type:String
},
varients:[],
prices:[
    {
        small: Number,
        medium:Number,
        large:Number
    }
],

category:{
    type:String
},
photoUrl: {
    type:String
},
description:{
    type:String
},
})

module.exports = mongoose.model('Pizza',pizzaSchema)