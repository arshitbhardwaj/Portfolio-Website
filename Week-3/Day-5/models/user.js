const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Invalid email"]
  },
  age: {
    type: Number,
    required: true,
    min: 1
  }
});

module.exports = mongoose.model("User", userSchema);