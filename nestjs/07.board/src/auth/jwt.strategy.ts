import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { Paylaod } from './jwt-payload.interface';
import * as config from 'config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    // JWT 전략 설정
    super({
      secretOrKey: process.env.JWT_SECRET || config.get('jwt.secret'), // JWT 비밀키 설정
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Bearer 토큰에서 JWT 추출
    });
  }

  // JWT 유효성 검사 및 사용자 정보 반환
  async validate(payload: Paylaod, done: VerifiedCallback): Promise<any>{
    const {email} = payload
    const user = await this.userService.getUser(email); // 사용자 서비스를 통해 이메일에 해당하는 사용자 조회
    if (!user) { // 사용자가 존재하지 않으면 UnauthorizedException 발생
      return done(new UnauthorizedException({message: 'user does not exist'}))
    }
    return done(null, user) // 사용자 정보 반환
  }
}
