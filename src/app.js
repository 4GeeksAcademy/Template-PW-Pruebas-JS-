import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here



  //          0   /       1        /   2         /   3
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let rdmWho = Math.floor(Math.random() * who.length )
let rdmAction = Math.floor(Math.random() * action.length )
let rdmWhat = Math.floor(Math.random() * what.length )
let rdmWhen = Math.floor(Math.random() * when.length )




document.getElementById("excuse").innerHTML = (who[rdmWho] + " " + action[rdmAction] + " " + what[rdmWhat] + " " + when[rdmWhen]);
  //console.log(multiplicacion);
 
  
document.getElementById("boton").addEventListener("click",  function() {
    location.reload();
  });

};


