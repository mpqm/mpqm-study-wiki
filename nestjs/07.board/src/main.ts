import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 앱 모듈을 생성하여 Nest 애플리케이션을 생성
  const serverConfig = config.get('server'); // config 모듈에서 서버 설정을 가져옴
  await app.listen(serverConfig.port); // 앱을 지정된 포트 3000에서 시작
  Logger.log(`Application running on port ${serverConfig.port}`);
}
bootstrap();
