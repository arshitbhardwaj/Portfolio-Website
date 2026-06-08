const User = require("./models/user");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/day5db")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/add", async (req, res) => {
    const user = await User.create({
        name: "Rahul",
        email: "rahul@example.com",
        age: 23
    });

    res.json(user);
});