import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: any): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // 로그인 쿠키가 존재하는 경우
    if (request.cookies['login']) {
      return true;
    }
    if (!request.body.email || !request.body.password) {
      return false;
    }
    // 이메일 또는 비밀번호가 누락된 경우
    const user = await this.authService.validateUser(
      request.body.email,
      request.body.password,
    );
    // 사용자 유효성 검사 수행
    if (!user) {
      return false;
    }
    // 유효한 사용자일 경우 request 객체에 사용자 정보 저장하고 true 반환
    request.user = user;
    return true;
  }
}

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // canActivate 메서드를 오버라이딩
  async canActivate(context: any): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest(); // HTTP 요청 객체 가져옴
    await super.logIn(request); // Passport의 logIn 메서드를 사용하여 로그인 처리
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest(); // HTTP 요청 객체 가져옴
    return request.isAuthenticated(); // 현재 사용자가 인증된 경우 true 반환
  }
}

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: any): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
