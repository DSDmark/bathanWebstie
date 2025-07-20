const User = require("../modules/uses");
const user = {
  userById: async (req, res) => {
    const user = await User.findById(req.params.id);
    if (
      !user ||
      (req.user.role === "engineer" && req.user.id !== user._id.toString())
    ) {
      return res.status(403).json({ message: "Permission denied" });
    }
    res.json(user);
  },
  // find current user details
  currentUser: async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json(user);
  },
};

module.exports = user;
