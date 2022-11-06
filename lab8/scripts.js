document.write("Hello World!");

function changePara(){
document.getElementById("jsExample").innerHTML = "This is the replaced text!";
}

var mathX = 1;
var mathX = 2;
var mathZ;

mathZ = mathX + mathX;

document.write(mathZ);

function argExample(x,y){
  mathZ = x + y;
  document.write(mathZ);
}

function styleSwap(){
document.getElementById("one").style.fontSize = "30px" ;
document.getElementById("one").style.color = "blue" ;
document.getElementById("two").style.marginLeft = "150px" ;
document.getElementById("two").style.color = "green" ;
document.getElementById("three").style.textTransfrom = "uppercase" ;
document.getElementById("three").style.color = "orange" ;
}

function calcOutputAdd(x,y){
  var result = x + y;
  document.getElementById("output").innerHTML = result;
}

function calcOutputSubtract(x,y){
  var result = x - y;
  document.getElementById("output").innerHTML = result;
}

function calcOutputMultiply(x,y){
  var result = x * y;
  document.getElementById("output").innerHTML = result;
}

function calcOutputDivide(x,y){
  var result = x / y;
  document.getElementById("output").innerHTML = result;
}
