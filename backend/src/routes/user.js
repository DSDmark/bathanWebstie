// routes/users.js
const express = require("express");
const User = require("../modules/uses");
const { auth, restrictTo } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, restrictTo("manager"), async (req, res) => {
  const engineers = await User.find({ role: "engineer" });
  res.json(engineers);
});

router.get("/:id", auth, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (
    !user ||
    (req.user.role === "engineer" && req.user.id !== user._id.toString())
  ) {
    return res.status(403).json({ message: "Permission denied" });
  }
  res.json(user);
});

module.exports = router;
