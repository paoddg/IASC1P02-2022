//Create the button in HTML that calls stopTime().
//When the page laods, get the current full date information into a varible.
var initialTime = new Date();
//stopTime() -> get the current full date information into a "different" varible currentTime.
function stopTime(){
  var currentTime = new Date();
//Do some math - subract intialTime from currentTime to get the number of milliseconds the page has been loaded for. Divide by 600 to get # of seconds.
var timeDifference = (currentTime - initialTime) / 600;
alert("You have been on the page for: " + timeDifference + " seconds");
}
//Output with a popup.
