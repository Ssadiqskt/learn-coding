
function mylogin (){
    var un = document.forms["myform"]["Uname"].value;
    var pw = document.forms["myform"]["pass"].value;
    if (un== "sadiq" && pw== "1234") {
      window.location.href="flipkartmain.html"
    } else {
      alert("wrong user name or password")
    }
 }



 function mylogin1 (){
    var un = document.forms["myform1"]["Uname1"].value;
    var pw = document.forms["myform1"]["pass1"].value;
    var cw = document.forms["myform1"]["cnpass1"].value;
    if (un== "sadiq" && pw== "1234" &&  cw == pw) {
      window.location.href="regsuccess.html"
    } else {
      alert("password and confirm password doesnt match")
    }
 }

