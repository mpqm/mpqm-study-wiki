import { RequestHandler } from "express"; 
import createHttpError from "http-errors";

// 사용자 인증이 필요한 미들웨어 함수
// 세션의 사용자 ID를 확인하여 인증 여부를 판단, 인증되지 않은 경우 401 Unauthorized 에러를 생성
export const requiresAuth: RequestHandler = (req, res, next) => {
    if(req.session.userId){
        next();
    }else{
        next(createHttpError(401, "User not authenticated"))
    }
}