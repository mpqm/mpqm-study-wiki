import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 애플리케이션 부트스트래핑 함수
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NestJS 애플리케이션 생성
  await app.listen(3000); // 애플리케이션을 3000 포트에서 실행
}
bootstrap(); // 애플리케이션 부트스트래핑 함수 호출
