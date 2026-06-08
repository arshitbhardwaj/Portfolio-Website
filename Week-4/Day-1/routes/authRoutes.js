const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const {
    authMiddleware,
    blacklist
} = require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const router = express.Router();


router.post("/signup", async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;

        const existingUser =
        await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "Email already exists"
            });

        }

        const hashedPassword =
        await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


router.post("/login", async (req, res) => {

    const {
        email,
        password
    } = req.body;

    const user =
    await User.findOne({ email });

    if (!user) {

        return res.status(400).json({
            message: "User not found"
        });

    }

    const isMatch =
    await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {

        return res.status(400).json({
            message: "Invalid password"
        });

    }

    const token = jwt.sign(
        { id: user._id },
        "secretkey",
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login Successful",
        token
    });

});


router.get(
    "/profile",
    authMiddleware,
    async (req, res) => {

        const user =
        await User.findById(req.user.id)
        .select("-password");

        res.json(user);

});


router.get(
    "/admin",
    authMiddleware,
    adminMiddleware,
    (req, res) => {

        res.json({
            message: "Welcome Admin"
        });

});


router.post(
    "/logout",
    (req, res) => {

        const token =
        req.header("Authorization");

        blacklist.push(token);

        res.json({
            message: "Logged Out"
        });

});


module.exports = router;