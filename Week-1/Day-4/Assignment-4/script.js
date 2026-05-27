
// Multiplication Table

let number = 5;
console.log("Multiplication Table of " + number);
for(let i = 1; i <= 10; i++){
    console.log(number + " x " + i + " = " + (number * i));
}

// Prime Number Check
let num = 7;
let isPrime = true;
for(let i = 2; i < num; i++){
    if(num % i === 0){
        isPrime = false;
    }
}

if(isPrime){
    console.log(num + " is Prime");
}
else{
    console.log(num + " is Not Prime");
}

// Sum from 1 to 100

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log("Sum from 1 to 100 = " + sum);