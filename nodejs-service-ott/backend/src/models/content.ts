import { InferSchemaType, model, Schema } from "mongoose";

// "Content" 데이터의 스키마를 정의
const ContentSchema = new Schema({
    type: { type: String },
    genre: { type: String },
    content:{type:Array}
},{timestamps:true})

type Content = InferSchemaType<typeof ContentSchema>; // ContentSchema로부터 TypeScript 유형을 추론

export default model<Content>("Content", ContentSchema); // "Content" 모델을 생성하고 내보냄