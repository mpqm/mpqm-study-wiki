import express from "express";
import * as sellerController from "../controllers/seller";
import { asyncErrorHandler } from "../middlewares/error";
import { isAutenticatedSeller } from "../middlewares/auth";
const router = express.Router();

router.post("/signup", asyncErrorHandler(sellerController.sellerSignup))
router.post("/activation", asyncErrorHandler(sellerController.sellerActivation));
router.post("/login", asyncErrorHandler(sellerController.sellerLogin));
router.get("/info", asyncErrorHandler(isAutenticatedSeller), asyncErrorHandler(sellerController.sellerInfo))

export default router;