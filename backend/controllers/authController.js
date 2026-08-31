const jwt = require("jsonwebtoken");

const users = [
    {
        id: 1,
        username: "admin",
        password: "1234",
        role: "admin"
    },
    {
        id: 2,
        username: "pankaj",
        password: "123456",
        role: "student"
    }
];

exports.login = (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        u =>
            u.username === username &&
            u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        token
    });
};

exports.dashboard = (req, res) => {

    res.json({

        message: "Protected Route Accessed",

        user: req.user

    });

};