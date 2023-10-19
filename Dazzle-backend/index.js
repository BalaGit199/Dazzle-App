const express = require('express')
const app = express()
const cors =require('cors')
const PORT = process.env.PORT || 3600

const dbConnect = require('./dbConnection')

const NearBySalon = require('./models/nearbymodel')

const registerRoutes = require('./controller/registerController')

const nearbyRoutes = require('./controller/nearByController')``````````````````


app.use(cors())
app.use('/register',registerRoutes)
app.use('/nearby',nearbyRoutes)

// const nearbylist = [
//     {
//         "shopId":100,
//         "shopName":"Green Trends Unisex Salon",
//         "offer":false,
//         "ratings":4.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":101,
//         "shopName":"Bounce Unisex Salon",
//         "offer":false,
//         "ratings":4,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":102,
//         "shopName":"PLSH Unisex Salon",
//         "offer":false,
//         "ratings":3.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":103,
//         "shopName":"Vurve Signature Salon",
//         "offer":false,
//         "ratings":3,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":104,
//         "shopName":"The GlamSquad Salon",
//         "offer":false,
//         "ratings":4.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":105,
//         "shopName":"Naturals Salon",
//         "offer":false,
//         "ratings":4.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":106,
//         "shopName":"Zique - Salon & Spa",
//         "offer":false,
//         "ratings":4.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":107,
//         "shopName":"Mini by Zazzle Salon",
//         "offer":false,
//         "ratings":4.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     },
//     {
//         "shopId":108,
//         "shopName":"Zazzle Salon",
//         "offer":false,
//         "ratings":4.5,
//         "img":"salon-img.jpg",
//         "location":"chennai",
//         "newOnDazzle":false,
//         "homeSalon":"In-Salon",
//         "ac":false,
//         "categories":["Hair Cut","Hair Coloring","Brial","Personal Grooming","Massage","Manicure"]
//     }
// ]


dbConnect().then((data)=>{
console.log("db connection successed")
}).then(()=>{app.listen(PORT, () => console.log(`server running successfully ${PORT}`))
}).catch(err => console.log(err));







// .then(()=>{NearBySalon.where("offer").equals(false).where("shopId").gt(104).updateMany({offer:true},function(err) {if(err){console.log("errorrr",err)} else{console.log("update sucessfully")}}).limit(4)
// })
//  const data ={}

//  data.shoplist = require('../Dazzle-backend/data/db.json');

// app.get('/',(req,res)=> {

//     res.json(data.shoplist);

// })


