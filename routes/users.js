const express = require('express');
const router = express.Router();

const User = require('../modals/user');


router.get("/",function(req,res){
    res.send("Hello worlds");
    });

    router.post("/register",function(req,res){
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            type:req.body.type,
            password:req.body.password
                
        });
        });

module.exports = router;