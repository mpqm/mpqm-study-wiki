import { InferSchemaType, model, Schema } from "mongoose";

// "User" 데이터의 스키마를 정의
const userSchema = new Schema({
    username: {type: String, required: true, unique: true}, // 사용자 이름을 저장하는 필드, 문자열 타입, 필수, 중복x
    email: {type: String, required: true, unique: true, select: false}, // 사용자 이메일을 저장하는 필드, 문자열 타입, 필수, 중복x, select 조회 시 제외
    password: {type: String, required: true, select: false}, // 사용자 비밀번호를 저장하는 필드, 문자열 타입, 중복x, select 조회 시 제외
});

// userSchema로부터 TypeScript 유형을 추론
type User = InferSchemaType<typeof userSchema>;

// "User" 모델을 생성하고 내보냄
export default model<User>("User", userSchema);