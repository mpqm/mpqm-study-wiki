import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from '../user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

// config 모듈을 사용하여 JWT 설정 가져오기
const jwtConfig = config.get('jwt');

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Passport 및 JWT 모듈 등록
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret, // JWT 비밀키 설정
      signOptions: { expiresIn: jwtConfig.expiresIn }, // 토큰 만료 시간 설정
    }),
    TypeOrmModule.forFeature([UserRepository]),  // TypeORM을 사용하여 UserRepository 등록
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], 
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
