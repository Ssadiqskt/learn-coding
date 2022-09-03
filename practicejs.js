let a= "sadiq";
let b= 9;
console.log(a+b);
const a1 = {
    name: "sadiq",
    section: "B",
    pass: true
}
a1['name'] = "saqeeb",
console.log(a1);

const dist = {
    hello : "way to talk",
    hi : "greetig",     
}
console.log(dist.hi)

/*----------operators and expressions------*/

 let a2 = 50 , b2 = 10;
console.log("a2++",a2++);
console.log("++a2",++a2);
console.log("a2--",a2--);
console.log("--a2",--a2);
/*--------assignment operators------
+=,
=+,
-=,
=-,
*=,
***/
let a3 = 10;
a+=5
console.log(a3)


/*-----comparision operators------------------*/

let comp1 = 6;
let comp2 =8;
console.log("comp1 == comp2 is", comp1==comp2)
console.log("comp1 == comp2 is", comp1!=comp2)
console.log("comp1 === comp2 is", comp1===comp2)
console.log("comp1 !== comp2 is", comp1!==comp2)

/*-------logical operators------*/

let x=8;
let x1= 9;
console.log(x<x1 && x==x1-1)
console.log(x>x1 || x==x1-1)
console.log(!false)

/*-------conditional operators------*/
// let p =prompt("how old are you");
// let p2 = prompt("Are you married?")
// if (p>=24 && p2=="yes") {
//     alert("you r marrried at the correct age!");
// } else if(p<24 && p2=="no") {
//     alert("wait till 24")
// }
//  else if(p>24 && p2=="no"){
//     alert("you should get married")
    
// }
// else if(p<24 && p2=="yes"){
//     alert("you should have waited till 24")
    
// }
    
/*---------for loop-----------*/
// let mul = 1
// let n = prompt("value");
//  n = Number.parseInt(n);
//  for(let i = 1; i<n; i++){
//     console.log(i)
//     mul += (i)
//  }
 

// console.log("multiply of " + n + "is" +mul)

// /*-----------while loop---------*/
// let m = 0
// while(m<50){
//     console.log(m);
//     m++;
// }



// let marks = {
//     harry: 55,
//     sid: 60,
//     sam: 65,
//     shaym:78,
    
// } 


// for(let i = 0; i<Object.keys(marks).length;i++){
//     console.log(Object.keys(marks)[i]+"="+marks[Object.keys(marks)[i]])
// }
//  names = [
//     "sadiq",
//     "saqeeb",
//     "shyam",
//     "ram" ,
//     "hulk"

// ]
//  for(let i = "hulk"; i!= Object.keys(names);i++){
//     console.log(Object.keys(names)[i])
// }

// const cars = ["Saab", "Volvo", "BMW"];
// let m = cars[2];
// console.log(m)
// ;
