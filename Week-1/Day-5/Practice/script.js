// Function to print Hello Student 3 times
function sayHello(){
    for(let i = 1; i <= 3; i++){
        console.log("Hello Student");
    }
}
// Function Call
sayHello();

// Function to return square of a number
function square(n){
    return n * n;
}

// Function Call
console.log(square(5));
console.log(square(8));

// Function Declaration
function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(4));


// Function Expression
const isEvenExpr = function(num){
    return num % 2 === 0;
};

console.log(isEvenExpr(7));


// Arrow Function
const isEvenArrow = (num) => {
    return num % 2 === 0;
};
console.log(isEvenArrow(10));

// Local Variable Example
function test(){
    let message = "Hello";
    console.log(message);
}
test();

// Error because message is local
console.log(message);
// var inside block
if(true){
    var city = "Delhi";
}
console.log(city);

// Add Function
function add(a, b){
    return a + b;
}

// Subtract Function
function subtract(a, b){
    return a - b;
}

// Multiply Function
function multiply(a, b){
    return a * b;
}


// Callback Function
function calculate(a, b, operation){
    return operation(a, b);
}


// Function Calls
console.log(calculate(10, 5, add));

console.log(calculate(10, 5, subtract));

console.log(calculate(10, 5, multiply));