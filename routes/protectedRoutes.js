const express = require("express");
const router = express.Router();

const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the protected dashboard",
    user: req.user
  });
});

router.get("/admin", authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: "Welcome admin",
    user: req.user
  });
});

module.exports = router;