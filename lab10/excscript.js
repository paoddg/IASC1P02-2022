function buttonAdd(){
textInput1=parseInt(myForm.textInput1.value);
textInput2=parseInt(myForm.textInput2.value);
document.getElementById("output").innerHTML = textInput1 + textInput2;
}

function buttonSub(){
textInput1=parseInt(myForm.textInput1.value);
textInput2=parseInt(myForm.textInput2.value);
document.getElementById("output").innerHTML = textInput1 - textInput2;
}

function buttonMult(){
textInput1=parseInt(myForm.textInput1.value);
textInput2=parseInt(myForm.textInput2.value);
document.getElementById("output").innerHTML = textInput1 * textInput2;
}

function buttonDiv(){
textInput1=parseInt(myForm.textInput1.value);
textInput2=parseInt(myForm.textInput2.value);
document.getElementById("output").innerHTML = textInput1 / textInput2;
}
