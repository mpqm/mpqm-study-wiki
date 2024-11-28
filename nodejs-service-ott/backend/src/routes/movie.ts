import express from "express";
import * as MovieController from "../controllers/movie";
import { requiresAuth } from "../middleware/requireAuth";
import { requiresRight } from "../middleware/requiresRight";

// 새로운 라우터 생성
const router = express.Router();

// "/createmovie" 경로로 POST 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, MovieController의 createMovie 함수 호출
router.post("/createmovie", requiresAuth, requiresRight, MovieController.createMovie);

// "/updatemovie/:movieId" 경로로 PUT 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, MovieController의 updateMovie 함수 호출
router.put("/updatemovie/:movieId", requiresAuth, requiresRight, MovieController.updateMovie);

// "/deletemovie/:movieId" 경로로 DELETE 요청이 들어오면
// requiresAuth, requiresRight 미들웨어 실행 후, MovieController의 deleteMovie 함수 호출
router.delete("/deletemovie/:movieId", requiresAuth, requiresRight, MovieController.deleteMovie);

// "/getmovie/:movieId" 경로로 GET 요청이 들어오면 
// requiresAuth 미들웨어 실행 후, MovieController의 getMovie 함수 호출
router.get("/getmovie/:movieId", requiresAuth, MovieController.getMovie);

// "/getallmovie" 경로로 GET 요청이 들어오면 
// requiresAuth 미들웨어 실행 후, MovieController의 getAllMovie 함수 호출
router.get("/getallmovie", requiresAuth, MovieController.getAllMovie);

// "/getmoviebytype" 경로로 GET 요청이 들어오면
// requiresAuth 미들웨어 실행 후, MovieController의 getMovieByType 함수 호출
router.get("/getmoviebytype", requiresAuth, MovieController.getMovieByType);

// "/getmoviebytitle" 경로로 GET 요청이 들어오면
// requiresAuth 미들웨어 실행 후, MovieController의 getMovieByName 함수 호출
router.get("/getmoviebytitle", requiresAuth, MovieController.getMovieByTitle);
export default router;
