import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document; // BlogDocument 타입 정의

// 스키마 정의
@Schema()
export class Blog {
  @Prop()
  id: string; // 블로그 글의 고유 식별자

  @Prop()
  title: string; // 블로그 글의 제목

  @Prop()
  content: string; // 블로그 글의 내용

  @Prop()
  name: string; // 블로그 글 작성자의 이름

  @Prop()
  createdDt: Date; // 블로그 글 작성일

  @Prop()
  updatedDt: Date; // 블로그 글 업데이트 일자
}

// Blog 스키마를 위한 SchemaFactory 생성
export const BlogSchema = SchemaFactory.createForClass(Blog);
