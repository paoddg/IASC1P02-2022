//Found on https://www.arclab.com/en/kb/htmlcss/display-date-time-javascript-php-ssi.html.
var dt = new Date();
document.getElementById("Clock").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
