const express = require('express')

const router = express.Router()

const NearBySalon = require('../models/nearbymodel');

router.get('/show',(req,res) =>{

    NearBySalon.find().then(data => res.send(data)).catch(err => console.log(err))

})

module.exports = router;