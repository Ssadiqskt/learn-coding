var express = require('express');
const cors  =  require("cors");
var mongoclient  = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
var data = "";
mongoclient.connect(url,function(err,db){

    if(err) throw err;
    var dbo = db.db("youtube");
    dbo.collection("mobiles").find({}).toArray(function(err,result){
        if (err) throw err;
        data = result
        console.log(data);
    })
});

var app = express();
app.use(cors());


app.get("/",(req,res)=>{
    var mainData = data
    res.send(mainData)
});

var server = app.listen(8081,function(){
    console.log("server started")
});