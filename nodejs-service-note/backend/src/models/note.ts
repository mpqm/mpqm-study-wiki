import { InferSchemaType, model, Schema } from "mongoose";

// "Note" 데이터의 스키마를 정의
const noteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, required: true}, // 사용자 ID를 저장하는 필드, ObjectId 타입, 필수
    title: { type: String, required: true }, // 노트 제목을 저장하는 필드, 문자열 타입, 필수
    text: { type: String }, // 노트 내용을 저장하는 필드, 문자열 타입
}, { timestamps: true }); // 생성 및 수정 시간을 자동으로 기록하기 위해 timestamps 옵션을 추가

// noteSchema로부터 TypeScript 유형을 추론
type Note = InferSchemaType<typeof noteSchema>;

// "Note" 모델을 생성하고 내보냄
export default model<Note>("Note", noteSchema);

