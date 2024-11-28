import express from "express";
import * as AuthController from "../controllers/auth";
import { requiresAuth } from "../middleware/requireAuth";

// 새로운 라우터 생성
const router = express.Router();

// "/getauth" 경로로 GET 요청이 들어오면
// requiresAuth 미들웨어 실행 후, AuthController의 getAuth 함수 호출
router.get("/getauth", requiresAuth, AuthController.getAuth);

// "/register" 경로로 POST 요청이 들어오면
// AuthController의 register 함수 호출
router.post("/register", AuthController.register);

// "/login" 경로로 POST 요청이 들어오면
// AuthController의 login 함수 호출
router.post("/login", AuthController.login);

// "/logout" 경로로 POST 요청이 들어오면
// requiresAuth 미들웨어 실행 후, AuthController의 logout 함수 호출
router.post("/logout", requiresAuth, AuthController.logout);

export default router;