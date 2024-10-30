import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

// UserController 클래스는 사용자 정보와 관련된 HTTP 요청을 처리하는 컨트롤러
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  private logger = new Logger('UserController'); // 로깅을 위한 Logger 클래스의 인스턴스를 생성

  // '/user/' 경로의 HTTP POST 요청을 처리하는 메서드
  // userDto에 유효성 검사 파이프 적용, 사용자 생성 처리 결과 반환
  @Post('/')
  createUser(@Body(ValidationPipe) userDto: UserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }

  // '/user/:email' 경로의 HTTP GET 요청을 처리하는 메서드
  // URL에서 추출한 이메일을 파라미터로 받음, 해당 이메일의 사용자 정보를 조회해 반환
  @Get('/:email')
  getUser(@Param('email') email: string): Promise<User | undefined> {
    return this.userService.getUser(email);
  }

  // '/user/' 경로의 HTTP GET 요청을 처리하는 메서드
  // 로그출력, 모든 사용자 정보를 조회해 반환
  @Get('/')
  getAllUser(): Promise<User[]> {
    this.logger.verbose(`GetAllUser`);
    return this.userService.getAllUser();
  }

  // '/user/:email' 경로의 HTTP PATCH 요청을 처리하는 메서드
  // userDto에 유효성 검사 파이프 적용, 로그 출력, 해당 이메일의 사용자 정보를 업데이트 결과 반환
  @Patch('/:email')
  updateUser(
    @Param('email') email: string,
    @Body(ValidationPipe) userDto: UserDto,
  ): Promise<User> {
    this.logger.verbose(`UpdateUser PayLoad: ${JSON.stringify(userDto)}`);
    return this.userService.updateUser(email, userDto);
  }

  // '/user/:email' 경로의 HTTP DELETE 요청을 처리하는 메서드
  // 로그출력, 해당 이메일의 사용자 정보 삭제
  @Delete('/:email')
  deleteUser(@Param('email') email: string): Promise<void> {
    this.logger.verbose(`DeleteUser ${email}`);
    return this.userService.deleteUser(email);
  }
}
