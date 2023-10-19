const mongoose = require('mongoose')

module.exports = mongoose.model('register',{

    regname:{type:String},
    email:{type:String},
    password:{type:String},
    username:{type:String},
    mobnumber:{type:String},
    confirmpassword:{type:String},

},'register');