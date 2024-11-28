import mongoose from "mongoose";

// express 세션 데이터에 mongoose.Types.ObjectId 타입 userId 속성을 추가하기위해 express session 모듈의 타입선언을 수정
declare module "express-session" { interface SessionData { userId: mongoose.Types.ObjectId; } }