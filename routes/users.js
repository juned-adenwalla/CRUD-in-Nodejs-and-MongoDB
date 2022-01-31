const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', async function(req, res){
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.send('Error' + err);
    }
});

router.get('/:id', async function(req, res){
    try{
        const users = await User.findById(req.params.id);
        res.json(users);
    }
    catch(err){
        res.send('Error' + err);
    }
});


router.post('/', async function(req, res){
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        active: req.body.active
    });

    try{
        const response = await user.save();
        res.json(response);
    }
    catch(err){
        res.send('Error' + err);
    }
});

router.patch('/:id', async function(req,res){
    try{
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub
        const response = await user.save();
        res.json(response);
    }
    catch(err){ 
        res.send('Error' + err);
    }
});

router.delete('/:id', async function(req,res){
    try{
        const user = await User.findById(req.params.id);
        const response = await user.delete();
        res.json(response);
    }
    catch(err){ 
        res.send('Error' + err);
    }
});


module.exports = router;