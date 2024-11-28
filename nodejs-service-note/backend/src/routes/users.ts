import express from "express";
import * as UserController from "../controller/users"; // "../controller/user"에서 UserController를 가져옴
import {requiresAuth} from "../middleware/auth" // 세션의 사용자 ID를 확인해 인증 여부를 판단하는 미들웨어 함수

const router = express.Router();

/*
루트 경로에 대한 GET 요청 핸들러를 등록
equiresAuth 미들웨어를 사용해 인증이 필요한 요청인지 확인
인증된 사용자의 정보를 반환하는 UserController.getAuthenticatedUser 함수를 실행
*/
router.get("/", requiresAuth, UserController.getAuthenticatedUser);

// /signup 경로에 대한 POST 요청 핸들러를 등록, 회원 가입을 처리하는 UserController.signUp 함수를 실행
router.post("/signup", UserController.signUp);

// /login 경로에 대한 POST 요청 핸들러를 등록, 로그인을 처리하는 UserController.login 함수를 실행
router.post("/login", UserController.login);

// /logout 경로에 대한 POST 요청 핸들러를 등록, 로그아웃을 처리하는 UserController.logout 함수를 실행
router.post("/logout", UserController.logout);

export default router;