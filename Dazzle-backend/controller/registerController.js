const express =require('express')

const app = express();

const router = express.Router()

const Register = require('../models/registermodel');

router.get('/value',(req,res) =>{

    Register.find().then(data => res.send(data)).catch(err => console.log(err))

})

module.exports = router;