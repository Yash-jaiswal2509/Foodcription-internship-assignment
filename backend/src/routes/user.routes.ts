import { Router } from "express";
import {
  loginUser,
  registerUser,
  validateUserRegistration,
} from "../controllers/users.controllers";
import { verifyJwt } from "../middlewares/auth.middleware";

const router = Router();
router.post("/register",  registerUser);

router.post("/login", loginUser);

export default router;
