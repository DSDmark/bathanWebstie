const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/user-details/:id", userController.userById);
router.post("/user-details", userController.currentUser);

module.exports = router;
