var fs = require('fs');

// var hello = fs.appendFile('mynewfile1.txt', 'i am from anantapur', function (err , data) {     
//   if (err) throw err;
//   console.log("saved");
// });
var fs = require('fs');

var hello = fs.appendFile('mynewfile2.txt', '//////////', function (err , data) {     
  if (err) throw err;
  console.log("file2 created");
});
var reader = fs.createReadStream('mynewfile1.txt');
var writer = fs.createWriteStream('mynewfile2.txt');
 
reader.pipe(writer);