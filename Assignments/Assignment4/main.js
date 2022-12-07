//Found on https://www.programiz.com/javascript/examples/display-current-date
function display_ct() {
var x = new Date()
var x1=x.toUTCString();// changing the display to UTC string
document.getElementById('Clock').innerHTML = x1;
tt=display_c();
 }
