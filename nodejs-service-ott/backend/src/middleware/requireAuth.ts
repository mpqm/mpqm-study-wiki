import { RequestHandler } from "express"; 
import createHttpError from "http-errors";

// 특정 요청을 처리하기 전에 인증된 사용자인지 확인하는 미들웨어
export const requiresAuth: RequestHandler = (req, res, next) => {
    // userId 값이 존재한다면, 인증된 사용자이므로 다음 미들웨어로 제어를 넘김
    // 아니면, 인증되지 않은 사용자이므로 에러를 생성해 다음 미들웨어로 에러를 넘김
    if(req.session.userId){next();}
    else{next(createHttpError(401, "인증된 사용자가 아님"))}
}

