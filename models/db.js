
const mongoose = require('mongoose');
const url = "mongodb+srv://TestDb:hongtu301201@testdatabase1.uevlb.mongodb.net/ATN-ToyCompany"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./product.model');