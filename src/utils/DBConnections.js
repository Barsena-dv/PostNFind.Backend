const mongoose = require("mongoose");

const dbConnection = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Findly").then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log("Database not connected",err);
    })
}

module.exports = dbConnection;