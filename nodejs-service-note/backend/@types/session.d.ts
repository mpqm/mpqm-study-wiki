import mongoose from "mongoose";

// express 세션 데이터에 userId 속성을 추가하기위해 express session모듈의 타입선언을 수정
// 세션 데이터에 userId 속성을 추가 해당 속성은 mongoose.Types.ObjectId 타입
declare module "express-session"{
    interface SessionData {
        userId: mongoose.Types.ObjectId;
    }
}