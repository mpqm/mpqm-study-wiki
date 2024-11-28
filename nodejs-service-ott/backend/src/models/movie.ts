import { InferSchemaType, model, Schema } from "mongoose";

// "Movie" 데이터의 스키마를 정의
const movieSchema = new Schema({
    title: {type:String, required:true, unique: true},
    desc: {type: String},
    img: {type:String},
    trailer: {type: String},
    video: {type: String},
    year: {type: String},
    limit: {type: Number},
    genre: {type: String},
    isSeries: {type: Boolean, default:false},
    like: {type: Number},
    disLike: {type: Number},
},{timestamps:true})

type Movie = InferSchemaType<typeof movieSchema>; // MovieSchema로부터 TypeScript 유형을 추론

export default model<Movie>("Movie", movieSchema); // "Movie" 모델을 생성하고 내보냄