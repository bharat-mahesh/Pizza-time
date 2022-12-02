const express = require('express')
const router = express.Router();

const users = require('../models/user')


router.route('/create').post(async (req,res)=>{
    const password = req.body.password;
    const email = req.body.email;

    const user = await users.findOne({email: email})
    if (user){
        res.status(400).json({message: "User already exists" })
    }
    const new_user = await new users({password: password, email: email});
    new_user.save().then(() => res.send("Added")).catch((error) => res.send(error));
})


router.route('/login').post(async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    let sess = req.session;
    const user = await users.findOne({email: email, password:password});
    if (user){
        sess.email = email;
        res.send("logged in")
    }
    else{
        res.status(400).json({message: "Incorrect email or password"});
    }
    
})

router.route('/current').get((req, res) => {
    res.send(req.session.email);
})

router.route('/logout').get((req, res) => {
    req.session.destroy();
    res.send("logout success!");
})

module.exports = router;
