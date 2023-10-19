const mongoose = require('mongoose')

module.exports = mongoose.model('nearby',{

    shopId:{type:Number},
    shopName:{type:String},
    offer:{type:Boolean},
    rating:{type:Number},
    img:{type:String},
    location:{type:String},
    newOnDazzle:{type:Boolean},
    homeSalon:{type:String},
    ac:{type:Boolean},
    categories:{type:Array} 
},'nearby');