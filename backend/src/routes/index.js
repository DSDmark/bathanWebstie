const express = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", authMiddleware.auth, userRoutes);

module.exports = router;
