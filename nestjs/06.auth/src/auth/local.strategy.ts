import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local'; // 로컬 인증 전략을 가져옴
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // 로그인 시 사용되는 필드 이름을 'email'로 설정
  }

  // 사용자 유효성 검사를 위한 메서드
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password); // 유효성 검사
    if (!user) {
      return null; // 사용자가 없을 경우 null 반환
    }
    return user; // 사용자 정보 반환 (인증 성공)
  }
}
