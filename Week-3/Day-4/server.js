const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(() => console.log("MongoDB Connected"));

app.get("/users/age/:min", async (req, res) => {
    const minAge = Number(req.params.min);

    const users = await User.find({
        age: { $gt: minAge }
    });

    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});