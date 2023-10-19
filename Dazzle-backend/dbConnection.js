
// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/dazzledb";


// const connectDatabase = (dballval) => {

//     MongoClient.connect(url,{useNewUrlParser: true},function async(err,db){

//         if(err) throw err;
       
//         const dbvalue = db.db("dazzledb");     
         
//         dballval  = dbvalue;

//        });

//     //    return local_value;
// }


module.exports = () => {

    return mongoose.connect(url,{useNewUrlParser:true})
      
};



//  dbname.collection("register").find({}).toArray(function(err,result){
      
//     if(err) throw err;
//     console.log("All data",result);
    
//  });

// console.log("dbname",dbname);
