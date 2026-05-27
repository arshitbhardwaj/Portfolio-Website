// Even Numbers using filter()
let numbers = [10, 15, 20, 25, 30, 35];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Laptop Object

let laptop = {
    brand: "HP",
    ram: "16GB",
    price: 65000,

    details(){
        console.log(`Brand: ${this.brand}`);

        console.log(`RAM: ${this.ram}`);

        console.log(`Price: ₹${this.price}`);

    }

};

laptop.details();

// Highest, Lowest, Average

let marks = [85, 92, 76, 64, 98];
let highest = Math.max(...marks);
let lowest = Math.min(...marks);
let total = marks.reduce(
    (sum, mark) => sum + mark,
    0
);

let average = total / marks.length;

console.log("Highest:", highest);

console.log("Lowest:", lowest);

console.log("Average:", average);

// Student Records App

let students = [

    { name: "Rahul", age: 20, marks: 85 },

    { name: "Aditi", age: 21, marks: 92 }

];


// Add Student Function
function addStudent(name, age, marks){

    students.push({

        name: name,

        age: age,

        marks: marks

    });

}


// Add New Student
addStudent("Arshit", 20, 84);


// Show Students
students.forEach(student => {

    console.log(
        `${student.name} - ${student.marks}`
    );

});