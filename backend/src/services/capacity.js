// services/capacity.js
const Assignment = require("../models/Assignment");

const getAvailableCapacity = async (engineerId) => {
  const engineer = await User.findById(engineerId);
  const maxCapacity = engineer.employmentType === "full-time" ? 100 : 50;
  const currentDate = new Date();
  const activeAssignments = await Assignment.find({
    engineerId,
    startDate: { $lte: currentDate },
    endDate: { $gte: currentDate },
  });
  const totalAllocated = activeAssignments.reduce(
    (sum, a) => sum + a.allocationPercentage,
    0
  );
  return maxCapacity - totalAllocated;
};

module.exports = { getAvailableCapacity };
