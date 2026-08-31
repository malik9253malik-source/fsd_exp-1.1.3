const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    login,
    dashboard
} = require("../controllers/authController");

router.post("/login", login);

router.get("/dashboard", auth, dashboard);

module.exports = router;