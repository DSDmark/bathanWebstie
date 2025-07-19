// routes/projects.js
const express = require("express");
const Project = require("../modules/projects");
const { auth, restrictTo } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const projects = await Project.find(
    req.user.role === "manager" ? {} : { managerId: req.user.id }
  );
  res.json(projects);
});

router.post("/", auth, restrictTo("manager"), async (req, res) => {
  const project = new Project({ ...req.body, managerId: req.user.id });
  await project.save();
  res.status(201).json(project);
});

module.exports = router;
