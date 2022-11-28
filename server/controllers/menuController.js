const Pizza=require('../models/pizza')

function menuController(){
    return{
        async index(req,res){
            const pizzas = await Pizza.find({}).select('description name image')
            try {
                res.json(pizzas)
                
            } catch (error) {
                res.send(error).status(500)
            }
        },
        async pizzadeets(req,res){
            // console.log(res);
            try {
                card={
                    name:res.pizza.name,
                    description:res.pizza.description,
                    prices:res.pizza.prices
                }
                res.json(card)
                
            } catch (error) {
                res.json(error)
            }
           
        }
    }
}

module.exports = menuController