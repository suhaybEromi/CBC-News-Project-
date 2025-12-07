import express from "express";
const router = express.Router();
import authController from "../controllers/auth.js";
import { signupValidator, signinValidator } from "../validations/validator.js";
import { handleValidationErrors } from "../validations/handleValidationError.js";

router.post(
  "/login",
  signinValidator,
  handleValidationErrors,
  authController.signin
);

router.post(
  "/signup",
  signupValidator,
  handleValidationErrors,
  authController.signup
);

router.post("/logout", authController.logout);

export default router;
