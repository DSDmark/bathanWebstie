// routes/assignments.js
const express = require("express");
const Assignment = require("../modules/asssessment");
const User = require("../modules/uses");
const { auth, restrictTo } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const query = req.user.role === "manager" ? {} : { engineerId: req.user.id };
  const assignments = await Assignment.find(query).populate(
    "projectId engineerId"
  );
  res.json(assignments);
});

router.post("/", auth, restrictTo("manager"), async (req, res) => {
  const { engineerId, projectId, allocationPercentage, startDate, endDate } =
    req.body;
  const engineer = await User.findById(engineerId);
  const maxCapacity = engineer.employmentType === "full-time" ? 100 : 50;

  const currentAssignments = await Assignment.find({
    engineerId,
    $or: [{ startDate: { $lte: endDate }, endDate: { $gte: startDate } }],
  });
  const totalAllocated = currentAssignments.reduce(
    (sum, a) => sum + a.allocationPercentage,
    0
  );

  if (totalAllocated + allocationPercentage > maxCapacity) {
    return res.status(400).json({ message: "Engineer over-allocated" });
  }

  const assignment = new Assignment(req.body);
  await assignment.save();
  res.status(201).json(assignment);
});

module.exports = router;
