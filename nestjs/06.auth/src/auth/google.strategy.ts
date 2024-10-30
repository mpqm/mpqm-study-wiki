import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    // Google OAuth 2.0 클라이언트 설정
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google',
      scope: ['email', 'profile'],
    });
  }

  // 사용자의 구글 OAuth 인증 후 호출되는 메서드
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    // 프로필에서 필요한 정보 추출
    const { id, name, emails } = profile;
    const providerId = id;
    const email = emails[0].value;

    // UserService를 통해 사용자 정보를 가져오거나 저장
    const user: User = await this.userService.findByEmailOrSave(
      email,
      name.familyName + name.givenName,
      providerId,
    );
    return user; // 인증된 사용자 정보 반환
  }
}
