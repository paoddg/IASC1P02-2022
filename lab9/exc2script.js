
var todayFullDate = new Date();

var todayFullYear = todayFullDate.getFullYear();

var age = prompt("What is your age?");

document.getElementById("output").innerHTML = todayFullYear - age;
