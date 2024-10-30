import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './local.strategy';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [UserModule, PassportModule.register({ session: true })], // UserModule과 PassportModule을 가져옴
  providers: [AuthService, LocalStrategy, SessionSerializer, GoogleStrategy], // AuthService, LocalStrategy, SessionSerializer를 제공자로 등록
  controllers: [AuthController], // AuthController를 컨트롤러로 등록
})
export class AuthModule {}
