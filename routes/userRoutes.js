const express = require('express');
const router =  express.Router();
const User = require('../models/userModel');
const Address = require('../models/addressModel');

router.post("/submit", async (req, res) => {
    try{
        const {name, addressLine} = req.body;
        const newUser = await User.create({name});

        await Address.create({
            addressLine,
            userId: newUser.id,
        });

        res.send("USer and address saved successfully");
    } catch(error){
        console.log("error saving user and address",error);
        res.status(500).send("An error occures");
    }
});

module.exports = router;