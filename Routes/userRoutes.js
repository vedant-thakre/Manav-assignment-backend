import express from "express";
import {
  register,
  getMyProfile,
  login,
  logout,
} from "../Controllers/userController.js";
import { isAuthenticated } from "../Middleware/auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
