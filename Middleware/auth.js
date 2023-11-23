import { User } from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const id = "myid";

  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login first",
    });
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedToken._id);
  next();
};
