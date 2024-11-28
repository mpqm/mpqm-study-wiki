import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

// 환경 변수 유효성을 검증
export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(), // MONGO_CONNECTION_STRING을 문자열로 유효성 검증
    PORT: port(), // PORT를 포트 번호로 유효성 검증
    SESSION_SECRET: str(), // SECRET_KEY를 문자열로 유효성 검증
});