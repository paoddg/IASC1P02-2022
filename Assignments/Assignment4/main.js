//Found on https://www.programiz.com/javascript/examples/display-current-date
const element = document.getElementById('Clock');

     setInterval(function () {
       const currentDate = new Date();
       element.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
     }, 1000);
