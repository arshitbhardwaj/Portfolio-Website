//If=else statement;
let number = -2;
if(number >= 0){
    console.log("The number is positive");
}
else{
    console.log("The number is negative");
}

//If-else-if statement;
let temp = 7;
if(temp > 30){
    console.log("Hot weather");
}
else if(temp > 15   && temp < 30){
    console.log("Warm weather");
}   
else{
    console.log("Cold weather");
}

//Switch statement;
let month = 5;
switch(month){
    case 1: console.log("January");
    break;                      
    case 2: console.log("February");    
    break;
    case 3: console.log("March");
    break;
    case 4: console.log("April");
    break;
    case 5: console.log("May");
    break;
    case 6: console.log("June");
    break;
    case 7: console.log("July");
    break;
    case 8: console.log("August");
    break;
    case 9: console.log("September");
    break;
    case 10: console.log("October");
    break;
    case 11: console.log("November");
    break;
    case 12: console.log("December");
    break;
    default: console.log("Invalid month");
}

// Print 1 to 10
for(let i = 1; i <= 10; i++){

    console.log(i);

}

// Even numbers from 1 to 20
let num = 2;

while(num <= 20){

    console.log(num);

    num = num + 2;

}

// Array elements
let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits){

    console.log(fruit);

}

// Print 1 to 10 but skip 5
for(let i = 1; i <= 10; i++){

    if(i === 5){

        continue;

    }

    console.log(i);

}