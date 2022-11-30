const mongoose = require('mongoose');

const orderSchema=mongoose.Schema({
name:{
    type:String
},
phone:{
    type:String
},
address:{
    type:String
},
postalCode:{
    type:String
},
pizzName:{
    type:String
},
quantity:{
    type:Number
},
status:{
    type:String
}

})

module.exports = mongoose.model('Order',orderSchema)