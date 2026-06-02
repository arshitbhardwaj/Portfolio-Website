const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware
app.use((req, res, next) => {
    console.log("Request Time:", new Date().toLocaleString());
    next();
});

// Static files
app.use(express.static("public"));

// Users array
let users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aditi" }
];

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
    res.send("This is my Express Mini Project");
});

app.get("/contact", (req, res) => {
    res.send("Contact: arshit@example.com");
});

app.get("/weather/:city", (req, res) => {
    const city = req.params.city;

    res.json({
        city: city,
        temp: "30°C"
    });
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.post("/api/users", (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json({
        message: "User Added",
        users
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});