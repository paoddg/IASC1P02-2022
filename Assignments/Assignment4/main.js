var statement = document.getElementById("statement");
var destinations = document.getElementById("destinations");
var values = document.getElementById("values");

var statementButton = document.getElementById("statementButton");
var destinationsButton = document.getElementById("destinationsButton");
var valuesButton = document.getElementById("valuesButton");

function switchOffEverything() {
  statement.style.display = "none";
  destinations.style.display = "none";
  values.style.display = "none";
}

function switchTostatement() {
  switchOffEverything();
  statement.style.display = "block";
}

statementButton.onclick = switchTostatement;

function switchTodestinations() {
  switchOffEverything();
  destinations.style.display = "block";
}

destinationsButton.onclick = switchTodestinations;

function switchTovalues() {
  switchOffEverything();
  values.style.display = "block";
}

valuesButton.onclick = switchTovalues;

//Found on https://www.howtocodestatement.com/2020/05/display-current-date-and-time-using-html-javascript.html
var dt = new Date();
document.getElementById('Clock').innerHTML=dt;
