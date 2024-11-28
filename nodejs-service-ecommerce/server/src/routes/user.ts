import express from "express";
import * as userController from "../controllers/user";
import { isAutenticatedUser } from "../middlewares/auth";
import { asyncErrorHandler } from "../middlewares/error";

const router = express.Router();

router.post("/signup", asyncErrorHandler(userController.userSignup));
router.post("/activation", asyncErrorHandler(userController.userActivation));
router.post("/login", asyncErrorHandler(userController.userLogin));
router.get("/logout", asyncErrorHandler(isAutenticatedUser), asyncErrorHandler(userController.userLogout));
router.get("/info", asyncErrorHandler(isAutenticatedUser), asyncErrorHandler(userController.userInfo))

export default router;