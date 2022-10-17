const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const databaseName='flipkart'
const client= new MongoClient(url);
let result = client.connect(); 
let db = result.db(databaseName);
let cd = db.collection('product');
let fd =()=>{cd.find({},{"processer":1});} 
fd();




    
    
    


// getData().then((x)=>{console.log(x);})

    
