// Students Array
let students = [

    { name: "Rahul", age: 20, marks: 85 },

    { name: "Aditi", age: 21, marks: 92 },

    { name: "Aman", age: 19, marks: 76 }

];


// Show All Students
console.log("All Students:");

students.forEach(student => {

    console.log(
        `${student.name} - ${student.marks}`
    );

});


// Add New Student
students.push({

    name: "Arshit",

    age: 20,

    marks: 94

});


// Filter Toppers
let toppers = students.filter(student =>
    student.marks >= 80
);


console.log("Toppers:");

toppers.forEach(student => {

    console.log(
        `${student.name} - ${student.marks}`
    );

});


// Calculate Average
let totalMarks = students.reduce(

    (sum, student) => sum + student.marks,

    0

);


let average =
(totalMarks / students.length).toFixed(2);


console.log("Class Average:", average);