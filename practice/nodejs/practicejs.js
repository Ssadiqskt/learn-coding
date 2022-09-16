// let a= "sadiq";
// let b= 9;
// console.log(a+b);
// const a1 = {
//     name: "sadiq",
//     section: "B",
//     pass: true
// }
// a1['name'] = "saqeeb",
// console.log(a1);

// const dist = {
//     hello : "way to talk",
//     hi : "greetig",     
// }
// console.log(dist.hi)

// /*----------operators and expressions------*/

//  let a2 = 50 , b2 = 10;
// console.log("a2++",a2++);
// console.log("++a2",++a2);
// console.log("a2--",a2--);
// console.log("--a2",--a2);
// /*--------assignment operators------
// +=,
// =+,
// -=,
// =-,
// *=,
// ***/
// let a3 = 10;
// a+=5
// console.log(a3)


// /*-----comparision operators------------------*/

// let comp1 = 6;
// let comp2 =8;
// console.log("comp1 == comp2 is", comp1==comp2)
// console.log("comp1 == comp2 is", comp1!=comp2)
// console.log("comp1 === comp2 is", comp1===comp2)
// console.log("comp1 !== comp2 is", comp1!==comp2)

// /*-------logical operators------*/

// let x=8;
// let x1= 9;
// console.log(x<x1 && x==x1-1)
// console.log(x>x1 || x==x1-1)
// console.log(!false)

// /*-------conditional operators------*/
// // let p =prompt("how old are you");
// // let p2 = prompt("Are you married?")
// // if (p>=24 && p2=="yes") {
// //     alert("you r marrried at the correct age!");
// // } else if(p<24 && p2=="no") {
// //     alert("wait till 24")
// // }
// //  else if(p>24 && p2=="no"){
// //     alert("you should get married")
    
// // }
// // else if(p<24 && p2=="yes"){
// //     alert("you should have waited till 24")
    
// // }
    
// /*---------for loop-----------*/
// // let mul = 1
// // let n = prompt("value");
// //  n = Number.parseInt(n);
// //  for(let i = 1; i<n; i++){
// //     console.log(i)
// //     mul += (i)
// //  }
 

// // console.log("multiply of " + n + "is" +mul)

// // /*-----------while loop---------*/
// // let m = 0
// // while(m<50){
// //     console.log(m);
// //     m++;
// // }



// // let marks = {
// //     harry: 55,
// //     sid: 60,
// //     sam: 65,
// //     shaym:78,
    
// // } 


// // for(let i = 0; i<Object.keys(marks).length;i++){
// //     console.log(Object.keys(marks)[i]+"="+marks[Object.keys(marks)[i]])
// // }
// //  names = [
// //     "sadiq",
// //     "saqeeb",
// //     "shyam",
// //     "ram" ,
// //     "hulk"

// // ]
// //  for(let i = "hulk"; i!= Object.keys(names);i++){
// //     console.log(Object.keys(names)[i])
// // }

// // const cars = ["Saab", "Volvo", "BMW"];
// // let m = cars[2];
// // console.log(m)
// // ;

// function loginfunction(){

    // const email = document.getElementById('email');
    // const pass = document.getElementById('pass');
    // const Mymap =new Map();
    // Mymap.set ("raju@gmail.com","123@raju");
    // Mymap.set("ramu@gmail.com", "123@ramu");
    // Mymap.set("raju @gmail.com", "123@raju");
    // console.log(Mymap);
    // if (Mymap.has(email.value)) {
    //     alert("username already registered ")
        
    // } else {
    //     Mymap.set(email.value);
        
    //     alert("sucessfull");
    // }
    
    
    // }

    // function loginfunction(){
        // var email = document.getElementById('email');
        // var pass = document.getElementById('pass');

        
     
        //  if (Mymap.has(email.value)) {
        //      alert("username already registered ")
             
        //  } else {
        //      Mymap.set(email.value);
             
        //      alert("sucessfull");
             
        //  }
         
         
    //    }
    // let Mymap =new Map();
    //     Mymap.set("raju@gmail.com","123@raju")
    //     Mymap.set("ramu@gmail.com", "123@ramu")
    //     Mymap.set("sadiq@gmail.com", "123@sadiq")
    //     console.log(Mymap);
    // let Nmap = new Map();
    // Nmap.set ("sid@gmail.com", "123@sid");
    
    // Mymap.set(Nmap);
    // console.log(Mymap);
    
    // function loginfunction(){
    //     if (Mymap.has(email.value)) {
    //         alert("username already registered ")
            
    //     } else {
    //         Mymap.set(email.value);
            
    //         alert("sucessfull");
            
    //     }
    //   }
    //   var email = document.getElementById('email');
    //    var pass = document.getElementById('pass');
    //    var Mymap =new Map();
    //     Mymap.set("raju@gmail.com","123@raju")
    //     Mymap.set("ramu@gmail.com", "123@ramu")
    //     Mymap.set("sadiq@gmail.com", "123@sadiq")
    //   for(let value of Mymap.values()){
    //       console.log(value);
    //     }
    // let obj = {
    //     fname: "John",
    //     age: 30
    //   };
      
    //   let map = new Map(Object.entries(obj));
      
    let user = {
                
        Uname: document.getElementById('email').value,
        Upass: document.getElementById('pass').value
    }
      console.log(user)
    
    
    
    
    
    
    
