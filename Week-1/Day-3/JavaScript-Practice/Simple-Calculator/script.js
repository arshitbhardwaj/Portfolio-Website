// Add Function
function add(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let result = num1 + num2;

    document.getElementById("result").innerHTML =
    "Result: " + result;

}


// Subtract Function
function subtract(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let result = num1 - num2;

    document.getElementById("result").innerHTML =
    "Result: " + result;

}


// Multiply Function
function multiply(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let result = num1 * num2;

    document.getElementById("result").innerHTML =
    "Result: " + result;

}


// Divide Function
function divide(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let result = num1 / num2;

    document.getElementById("result").innerHTML =
    "Result: " + result;

}


// Even / Odd Function
function checkEvenOdd(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let answer = num1 + num2;

    if(answer % 2 === 0){

        document.getElementById("result").innerHTML =
        "Result: " + answer + " is Even";

    }
    else{

        document.getElementById("result").innerHTML =
        "Result: " + answer + " is Odd";

    }

}