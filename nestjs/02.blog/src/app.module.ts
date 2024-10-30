import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // Mongoose를 설정하고 데이터베이스에 연결하는 모듈을 가져옴
  imports: [
    MongooseModule.forRoot('YOUR MONGODB CONNECTION STRING'), // MongoDB 연결 문자열
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]), // Blog 모델 및 스키마를 등록
  ],
  controllers: [BlogController], // 모듈의 컨트롤러를 지정
  providers: [BlogService, BlogFileRepository, BlogMongoRepository], // 모듈에서 사용되는 서비스와 리포지토리를 등록
})
export class AppModule {}
