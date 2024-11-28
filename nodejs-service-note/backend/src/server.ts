import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import "dotenv/config"; // .env 파일을 사용해 환경 변수를 설정
import env from "./utils/validateEnv";
import MongoStore from "connect-mongo";
import noteRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import { requiresAuth } from "./middleware/auth";
import mongoose from "mongoose";

const app = express(); // Express 애플리케이션을 생성
app.use(morgan("dev")); // 개발 환경에서 요청 로그를 출력
app.use(express.json()); // 요청의 본문을 JSON 형식으로 파싱

app.use(
  session({
    secret: env.SESSION_SECRET, // 세션 암호화에 사용할 비밀 키
    resave: false, // 변경사항이 없을 경우 세션을 다시 저장하지 않음
    saveUninitialized: false, // 초기화되지 않은 세션을 저장소에 저장하지 않음
    cookie: {
      maxAge: 60 * 60 * 1000, // 세션 쿠키의 유효 기간을 설정(1h)
    },
    rolling: true, // 요청이 있을 때마다 세션의 유효 시간을 연장
    store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING, // MongoDB 연결 문자열
    }),
  })
);

app.use("/api/users", userRoutes); // "/api/users" 경로에 대한 라우팅을 userRoutes에 위임
app.use("/api/notes", requiresAuth, noteRoutes); // "/api/notes" 경로에 대한 라우팅을 noteRoutes에 위임,requiresAuth 미들웨어를 사용해 인증

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found")); // 존재하지 않는 엔드포인트에 대한 요청이 들어온 경우 404 에러
});

// 에러 핸들러 미들웨어
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error); // 에러를 콘솔에 출력합니다.
  let errorMessage = "An unknown error occurred"; // 기본적인 에러 메시지
  let statusCode = 500; // 기본적인 상태 코드
  if (isHttpError(error)) {
    // http-errors 모듈에서 생성된 에러인 경우
    statusCode = error.status; // 에러의 상태 코드를 가져옴
    errorMessage = error.message; // 에러의 메시지를 가져옴
  }
  res.status(statusCode).json({ error: errorMessage }); // 상태 코드와 에러 메시지를 JSON 형식으로 응답
});

// MongoDB 연결 및 서버 실행
const port = env.PORT; // 환경 변수에서 포트 번호를 가져와 `port` 변수에 할당

mongoose
  .connect(env.MONGO_CONNECTION_STRING) // MongoDB에 연결하기 위해 Mongoose를 사용
  .then(() => {
    console.log("Mongoose connected"); // MongoDB 연결이 성공한 경우 "Mongoose connected" 메시지를 콘솔에 출력
    app.listen(port, () => {
      console.log(`Server running on port ${port}`); // 서버가 지정된 포트에서 실행 중인 경우 "server running on port"와 포트 번호를 콘솔에 출력
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error); // 연결 중에 발생한 에러를 콘솔에 출력
    process.exit(1); // 에러 발생 시 애플리케이션 종료
  });

export default app;
