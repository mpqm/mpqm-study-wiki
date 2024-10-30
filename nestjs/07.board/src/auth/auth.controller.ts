import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';
import { AuthDto } from './auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  private logger = new Logger('AuthController')

  // '/auth/register' 경로의 HTTP POST 요청을 처리하는 메서드, 사용자 등록을 처리하는 엔드포인트
  @Post('/register')
  register(@Body(ValidationPipe) userDto: UserDto): Promise<User> {
    this.logger.verbose(`Regster PayLoad: ${JSON.stringify(userDto)}`)
    return this.authService.register(userDto);
  }

  // '/auth/login' 경로의 HTTP POST 요청을 처리하는 메서드, 사용자 로그인을 처리하는 엔드포인트
  @Post('/login')
  async login( @Body(ValidationPipe) authDto: AuthDto, @Res() res: Response): Promise<any> {
    const jwt = await this.authService.login(authDto) // AuthService의 login 메서드 호출하여 JWT 토큰 얻기
    res.setHeader('Authorization', 'Bearer'+ jwt.accessToken); // 응답 헤더에 JWT 토큰 추가하고 응답 반환
    this.logger.verbose(`Login PayLoad: ${JSON.stringify(authDto)}`)
    return res.json(jwt);
  }

  // '/auth/authenticate' 경로의 HTTP GET 요청을 처리하는 메서드, 인증 확인을 처리하는 엔드포인트
  @Get('/authenticate')
  @UseGuards(JwtAuthGuard) // JwtAuthGuard를 통해 인증 여부 확인
  isAuthenticate(@Req() req: Request) {
    return req.user // 인증된 사용자 정보 반환
  }
}