const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["manager", "engineer"], required: true },
  skills: { type: [String], default: [] },
  seniority: { type: String, enum: ["junior", "mid", "senior"] },
  employmentType: {
    type: String,
    enum: ["full-time", "part-time"],
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
