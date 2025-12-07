import User from "../models/user.js";

export const verifyRole = (requiredRoles) => {
  return async (req, res, next) => {
    try {
      const userId = req.user._id;
      const user = await User.findById(userId);

      if (!user) return res.status(404).json({ message: "User not found" });

      if (user.role !== requiredRoles)
        return res
          .status(403)
          .json({ message: "Access denied: insufficient permissions" });
      next();
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
};
