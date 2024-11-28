import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../models/user";

// 특정 요청에 대한 접근 권한을 확인하는 미들웨어
export const requiresRight: RequestHandler = async (req, res, next) => {

    const userId = req.params.userId; // 요청 파라미터에서 userId 값을 추출
    const authenticatedUserId = req.session.userId; // 인증된 사용자의 userId를 세션에서 추출
    const admin = await UserModel.findById(authenticatedUserId) // 인증된 사용자의 userId를 사용해 해당 사용자의 정보를 MongDB에서 조회

    // 인증된 사용자의 userId와 요청의 userId가 동일하거나, 해당 사용자가 관리자인 경우, 다음 미들웨어로 넘김
    // 인증된 사용자의 userId와 요청의 userId가 다르거나, 해당 사용자가 관리자도 아니면, 에러를 생성해 다음 미들웨어로 넘김
    if (authenticatedUserId as string | undefined === userId || admin?.isAdmin) { next(); }
    else { next(createHttpError(403, "접근 권한 없음")) }

}
