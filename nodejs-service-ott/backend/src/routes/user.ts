import express from "express";
import * as UserController from "../controllers/user"; // "../controller/user"에서 UserController를 가져옴
import { requiresAuth } from "../middleware/requireAuth";
import { requiresRight } from "../middleware/requiresRight";

// 새로운 라우터 생성
const router = express.Router();

// "/updateuser/:userId" 경로로 PUT 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, UserController의 updateUser 함수 호출
router.put("/updateuser/:userId",requiresAuth, requiresRight, UserController.updateUser);

// "/deleteuser/:userId" 경로로 DELETE 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, UserController의 deleteUser 함수 호출
router.delete("/deleteuser/:userId", requiresAuth, requiresRight, UserController.deleteUser);

// "/getuser/:userId" 경로로 GET 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, UserController의 getUser 함수 호출
router.get("/getuser/:userId", requiresAuth, requiresRight, UserController.getUser);

// "/getalluser" 경로로 GET 요청이 들어오면
// requiresAuth, requiresRight 미들웨어를 실행 후, UserController의 getAllUser 함수 호출
router.get("/getalluser", requiresAuth, requiresRight, UserController.getAllUser);

// "/getuserstat" 경로로 GET 요청이 들어오면
// requiresAuth와 requiresRight 미들웨어 실행 후, UserController의 getUserStat 함수 호출
router.get("/getuserstat", requiresAuth, requiresRight, UserController.getUserStat);

export default router;