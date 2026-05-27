// ----------------------------
// Factorial Function
// ----------------------------

function factorial(n){

    let result = 1;

    for(let i = 1; i <= n; i++){

        result = result * i;

    }

    return result;

}

console.log("Factorial:", factorial(5));



// ----------------------------
// Reverse String Function
// ----------------------------

function reverseString(str){

    return str.split("").reverse().join("");

}

console.log(reverseString("Hello"));



// ----------------------------
// Palindrome Function
// ----------------------------

function isPalindrome(str){

    let reversed =
    str.split("").reverse().join("");

    return str === reversed;

}

console.log(isPalindrome("madam"));

console.log(isPalindrome("hello"));



// ----------------------------
// To-Do List Project
// ----------------------------

let tasks = [];


// Add Task
function addTask(task){

    tasks.push({
        name: task,
        completed: false
    });

    console.log(task + " added");

}


// Show Tasks
function showTasks(){

    console.log("To-Do List:");

    for(let i = 0; i < tasks.length; i++){

        console.log(
            (i + 1) + ". " +
            tasks[i].name +
            " - " +
            (tasks[i].completed ? "Completed" : "Pending")
        );

    }

}


// Mark Completed
function completeTask(index){

    tasks[index].completed = true;

    console.log("Task Completed");

}


// Function Calls
addTask("Learn JavaScript");

addTask("Practice CSS");

showTasks();

completeTask(0);

showTasks();