import {
  Body,
  Controller,
  Post,
  Response,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import {
  AuthenticatedGuard,
  LocalAuthGuard,
  LoginGuard,
  GoogleAuthGuard,
} from './auth.guard'; // 인증 관련 가드들 가져옴

@Controller('auth') // 라우팅 경로 설정
export class AuthController {
  // AuthService 주입
  constructor(private authService: AuthService) {}

  // POST /auth/register 경로로 접근하는 요청을 처리하는 엔드포인트
  // 사용자 생성 DTO를 받아와 회원가입 처리
  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  // POST /auth/login 경로로 접근하는 요청을 처리하는 엔드포인트
  // AuthService.validateUser를 통해 사용자 객체 검증, 유저 정보가 유효한 경우 로그인 쿠키 생성
  @Post('login')
  async login(@Request() req, @Response() res) {
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );
    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    }
    return res.send({ message: 'login success' });
  }

  // POST /auth/loginguard 경로로 접근하는 요청을 LoginGuard을 사용해 처리하는 엔드포인트
  // 로그인 쿠키가 없고, 로그인된 사용자 정보가 있는 경우에만 로그인 쿠키 생성 및 설정
  @UseGuards(LoginGuard)
  @Post('loginguard')
  async loginGuard(@Request() req, @Response() res) {
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        maxAge: 1000 * 10,
      });
    }
    return res.send({ message: 'loginGuard Success' });
  }

  // GET /auth/testloginguard 경로로 접근하는 요청을 LoginGuard을 사용해 처리하는 엔드포인트
  // 로그인 테스트 엔드포인트
  @UseGuards(LoginGuard)
  @Get('testloginguard')
  testLoginGuard() {
    return '로그인됬습니다.';
  }

  // POST /auth/testSession 경로로 접근하는 요청을 AuthenticatedGuard 사용해 처리하는 엔드포인트
  // 세션의 사용자 정보 반환
  @UseGuards(LocalAuthGuard)
  @Post('loginsession')
  loginsSession(@Request() req) {
    return req.user;
  }

  // GET /auth/testSession 경로로 접근하는 요청을 AuthenticatedGuard 사용해 처리하는 엔드포인트
  // 세션의 사용자 정보 반환
  @UseGuards(AuthenticatedGuard)
  @Get('testloginsession')
  testLoginSession(@Request() req) {
    return req.user;
  }

  // GET /auth/google 경로로 접근하는 요청을 GoogleAuthGuard를 사용해 처리하는 엔드포인트
  // 구글 로그인 폼
  @UseGuards(GoogleAuthGuard)
  @Get('logingoogle')
  async googleAuth(@Request() req) {}

  // GET /auth/google 경로로 접근하는 요청을 GoogleAuthGuard를 사용해 처리하는 엔드포인트
  // logingoogle의 리다이렉트 엔드포인트이며, 유저정보를 반환
  @UseGuards(GoogleAuthGuard)
  @Get('google')
  async googleAuthRedirect(@Request() req, @Response() res) {
    const { user } = req;
    return res.send(user);
  }
}
