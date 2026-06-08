const jwt = require("jsonwebtoken");

const blacklist = [];

const authMiddleware = (req, res, next) => {

    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            message: "No token provided"
        });
    }

    if (blacklist.includes(token)) {
        return res.status(401).json({
            message: "Token Expired"
        });
    }

    try {

        const verified = jwt.verify(
            token,
            "secretkey"
        );

        req.user = verified;

        next();

    } catch (err) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }

};

module.exports = {
    authMiddleware,
    blacklist
};