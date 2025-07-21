const User = require("../modules/uses");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const controller = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );
    res.setHeader("token", token);
    res.status(200).json({ user });
  },
  register: async (req, res) => {
    try {
      const { name, email, password, role, skills, seniority, employmentType } =
        req.body;

      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(409).json({ message: "Email already in use" });
      }
      const hashed = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashed,
        role,
        skills: skills || [],
        seniority,
        employmentType,
      });
      await user.save();
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET || "secret",
        { expiresIn: "1h" }
      );

      res.status(201).json({ token, role: user.role });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = controller;
