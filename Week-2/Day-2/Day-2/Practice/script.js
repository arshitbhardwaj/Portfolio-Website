// Arrow Function
const introduce = (name, age) => {

    console.log(`My name is ${name} and I am ${age} years old.`);

};


// Function Call
introduce("Arshit", 20);

// Array of Colors
let colors = ["Red", "Blue", "Green", "Yellow", "Black"];


// Add New Color
colors.push("White");


// Remove First Color
colors.shift();


// Print All Colors
colors.forEach(color => console.log(color));

// Book Object
let book = {

    title: "JavaScript Basics",

    author: "Arshit",

    pages: 250,


    // Method
    details(){

        console.log(`Title: ${this.title}`);

        console.log(`Author: ${this.author}`);

        console.log(`Pages: ${this.pages}`);

    }

};


// Method Call
book.details();

// Marks Array
let marks = [50, 70, 40, 90, 30];


// Filter Marks >= 50
let passedMarks = marks.filter(mark => mark >= 50);

console.log("Passed Marks:", passedMarks);


// Add Bonus Marks
let bonusMarks = passedMarks.map(mark => mark + 5);

console.log("Bonus Marks:", bonusMarks);


// Find Total
let total = bonusMarks.reduce((sum, mark) => sum + mark, 0);

console.log("Total:", total);

// Employees Array
let employees = [

    { name: "Arshit", salary: 300000 },

    { name: "Rahul", salary: 40000 },

    { name: "Aman", salary: 50000 }

];


// Increase Salary by 10%
let updatedEmployees = employees.map(employee => {

    return {

        name: employee.name,

        salary: employee.salary + (employee.salary * 0.10)

    };

});


// Print Updated Details
updatedEmployees.forEach(employee => {

    console.log(
        `${employee.name} - ₹${employee.salary}`
    );

});