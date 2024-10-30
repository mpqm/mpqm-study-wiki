import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // TypeORM 설정
    TypeOrmModule.forRoot({
      type: 'sqlite', // 데이터베이스 종류 (SQLite 사용)
      database: 'nest-auth.sqlite', // 데이터베이스 파일 이름
      entities: [User], // 사용할 엔티티 목록
      synchronize: true, // 엔티티와 스키마 동기화 여부
      logging: true, // 로깅 활성화 여부
    }),
    UserModule, // User 모듈 임포트
    AuthModule, // Auth 모듈 임포트
    ConfigModule.forRoot(), // .env 설정을 읽어오게 ConfigMoudle 설정
  ],
  controllers: [AppController], // 컨트롤러 등록
  providers: [AppService], // 서비스 등록
})
export class AppModule {}
