import express from "express";
import * as ContentController from "../controllers/content";
import { requiresAuth } from "../middleware/requireAuth";
import { requiresRight } from "../middleware/requiresRight";

// 새로운 라우터 생성
const router = express.Router();

// "/getcontent" 경로로 GET 요청이 들어오면 
// requiresAuth 미들웨어 실행 후, ContentController의 getContent 함수 호출
router.get("/getcontent", requiresAuth, ContentController.getContent);

// "/createcontent" 경로로 POST 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후 ContentController의 createContent 함수 호출
router.post("/createcontent", requiresAuth, requiresRight, ContentController.createContent);

// "/deletecontent/:contentId" 경로로 DELETE 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, ContentController의 deleteContent 함수 호출
router.delete("/deletecontent/:contentId", requiresAuth, requiresRight, ContentController.deleteContent);

export default router;