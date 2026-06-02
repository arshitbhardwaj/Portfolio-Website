const express = require("express");
const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

// Static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to my Express Info Server");
});

app.get("/about", (req, res) => {
    res.send("This is my Express mini project.");
});

app.get("/contact", (req, res) => {
    res.send("Contact: yourname@email.com");
});

app.get("/api/users", (req, res) => {
    const users = [
        { id: 1, name: "Rahul" },
        { id: 2, name: "Aditi" }
    ];

    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});