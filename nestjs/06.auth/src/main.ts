import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // AppModule 가져옴
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule을 기반으로 애플리케이션 인스턴스 생성
  app.useGlobalPipes(new ValidationPipe()); // 전역 파이프 설정 (유효성 검사 파이프)
  app.use(cookieParser()); // cookieParser 미들웨어 추가
  // express-session 미들웨어 추가
  app.use(
    session({
      secret: 'very-important-secret', // 세션 데이터 암호화를 위한 비밀키
      resave: false, // 변경사항이 없어도 세션을 다시 저장하지 않음
      saveUninitialized: false, // 초기화되지 않은 세션도 저장하지 않음
      cookie: { maxAge: 360000 }, // 세션 쿠키 설정 (유효 기간)
    }),
  );
  app.use(passport.initialize()); // passport 초기화
  app.use(passport.session()); // passport 세션 설정
  await app.listen(3000); // 애플리케이션을 3000 포트로 실행
}
bootstrap(); // 애플리케이션 실행
