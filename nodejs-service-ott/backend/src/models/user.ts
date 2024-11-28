import { InferSchemaType, model, Schema } from "mongoose";

// "User" 데이터의 스키마를 정의
const userSchema = new Schema({
    username: {type:String, required:true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type:String, required:true, unique:true},
    profile: {type: String, default:""},
    isAdmin:{type:Boolean, default:false},
},{timestamps:true})

type User = InferSchemaType<typeof userSchema>; // userSchema로부터 TypeScript 유형을 추론

export default model<User>("User", userSchema); // "User" 모델을 생성하고 내보냄