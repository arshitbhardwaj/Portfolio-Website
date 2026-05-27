// Empty Array
let tasks = [];


// Add Task Function
function addTask(task){

    tasks.push(task);

    console.log(task + " added");

}


// Show Tasks Function
function showTasks(){

    console.log("To-Do List:");

    for(let i = 0; i < tasks.length; i++){

        console.log((i + 1) + ". " + tasks[i]);

    }

}


// Delete Task Function
function deleteTask(index){

    tasks.splice(index, 1);

    console.log("Task deleted");

}


// Function Calls
addTask("Learn JavaScript");

addTask("Practice CSS");

showTasks();


// Delete First Task
deleteTask(0);

showTasks();