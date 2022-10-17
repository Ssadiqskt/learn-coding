const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const databaseName='flipkart'
const client= new MongoClient(url);

async function getData(e)
{
   e.preventDefault;
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('product');

    


}
getData();

function signup(){
   let email = document.getElementById('email').value;
    let passw = document.getElementById('pass').value;
    
    if (email != "" && passw != "") {
      db.collection('product').insertOne({email:passw})
    } else {
      alert("fill the fields")
    }
};
signup();




