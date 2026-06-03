const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Rahul", age: 20, email: "rahul@gmail.com" },
  { id: 2, name: "Aditi", age: 17, email: "aditi@gmail.com" },
  { id: 3, name: "Arshit", age: 21, email: "arshit@gmail.com" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Search user by name
app.get("/users/search", (req, res) => {
  const name = req.query.name;

  const filteredUsers = users.filter(
    user => user.name.toLowerCase() === name.toLowerCase()
  );

  res.json(filteredUsers);
});

// Adults only
app.get("/users/adults", (req, res) => {
  const adults = users.filter(user => user.age >= 18);

  res.json(adults);
});

// Emails only
app.get("/users/emails", (req, res) => {
  const emails = users.map(user => user.email);

  res.json(emails);
});

// GET user by ID
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

// POST add user
app.post("/users", (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    return res.status(400).json({
      message: "Name, age and email required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;
  user.email = req.body.email || user.email;

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userExists = users.find(u => u.id === id);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users = users.filter(u => u.id !== id);

  res.json({
    message: "User deleted successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});