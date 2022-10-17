
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('prac1.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {     
//   if (err) throw err;
//   console.log('Saved!');
// });
// }).listen(8080);
// var fs = require('fs');
// var rs = fs.createReadStream('./mynewfile1.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a sound!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('zzzzz', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('zzzzz');

//                                                                                    // node nodejspractise.js
//  const { write } = require('fs');
// var http = require('http');
//  http.createServer((req,res)=>{
//     res.write('<h1>hello world how are you!</h1>');
//     res.end('Iam ending here');
//  }).listen(1122);
function fun(A,B){
    
    if(B == 0)
    return B;
   return fun(B, A%B );
  
  
  }
var ans = fun(100 , 2000);
console.log(ans);