var school = document.getElementById("school");
var interests = document.getElementById("interests");
var goals = document.getElementById("goals");

var schoolButton = document.getElementById("schoolButton");
var interestsButton = document.getElementById("interestsButton");
var goalsButton = document.getElementById("goalsButton");

function switchOffEverything() {
  school.style.display = "none";
  interests.style.display = "none";
  goals.style.display = "none";
}

function switchToSchool() {
  switchOffEverything();
  school.style.display = "block";
}

schoolButton.onclick = switchToSchool;

function switchToInterests() {
  switchOffEverything();
  interests.style.display = "block";
}

interestsButton.onclick = switchToInterests;

function switchToGoals() {
  switchOffEverything();
  goals.style.display = "block";
}

goalsButton.onclick = switchToGoals;

//Found on https://www.howtocodeschool.com/2020/05/display-current-date-and-time-using-html-javascript.html
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
