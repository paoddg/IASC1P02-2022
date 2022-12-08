function hand() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf25a;";
  setTimeout(function () {
      a.innerHTML = "&#xf256;";
    }, 500);
  setTimeout(function () {
      a.innerHTML = "&#xf259;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf256;";
    }, 1500);
}
hand();
setInterval(hand, 2000);

// program to display the date and time
// get date and time
const date = new Date(2017, 2, 12, 9, 25, 30);

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);
