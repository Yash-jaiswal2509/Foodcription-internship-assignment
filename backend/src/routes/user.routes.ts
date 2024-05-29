import { Request, Router, Response } from "express";
import {
  loginUser,
  registerUser,
  validateUserRegistration,
} from "../controllers/user.controllers";
import { verifyJwt } from "../middlewares/auth.middleware";

const router = Router();
router.post("/register", validateUserRegistration, registerUser);

router.post("/login", loginUser);

export default router;
