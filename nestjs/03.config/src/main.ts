import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  console.log('SERVER LISTEN : ', configService.get('SERVER_PORT'));
  await app.listen(configService.get('SERVER_PORT'));
}
bootstrap();
