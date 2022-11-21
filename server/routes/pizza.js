const express = require('express');
const router=express.Router()
const Pizza=require('../models/pizza')


router.get('/', async (req,res)=>{
    
    try {
        const pizzas = await Pizza.find({}).select('description name photoUrl')
        res.json(pizzas)

    } catch (error) {
        res.send(error).status(500)
    }
})

router.get('/:id',getPizza,async(req,res)=>{
    card={
        name:res.pizza.name,
        description:res.pizza.description,
        prices:res.pizza.prices
    }
    res.json(card)
})

router.post('/',async(req,res)=>{
    const pizza = new Pizza({
        name:req.body.name,
        varients:req.body.varients,
        prices:req.body.prices,
        category:req.body.category,
        photoUrl:req.body.photoUrl,
        description:req.body.description
    })
    try {
        
        const newpizza= await pizza.save()
        res.json(newpizza)

    } catch (error) {
        res.send(error)
    }

})

async function getPizza(req,res,next){
    let pizza
    try {
        
        pizza= await Pizza.findById(req.params.id)
        if(pizza===null){
            res.json("No pizza")
        }

    } catch (error) {
        res.json(error)
    }
    res.pizza = pizza
    next()
}
module.exports=router