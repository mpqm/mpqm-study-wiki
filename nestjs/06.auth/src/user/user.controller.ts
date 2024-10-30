import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

// '/user' 경로로 접근하는 요청을 처리하는 컨트롤러
@Controller('user')
export class UserController {
  // 유저 서비스 주입
  constructor(private userService: UserService) {}

  // POST /user/createuser 경로로 접근하는 요청을 처리하는 엔드포인트
  // UserService.createUser를 통해 사용자 생성 요청 처리
  @Post('/create')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  // GET /user/getuser/:email 경로로 접근하는 요청을 처리하는 엔드포인트
  // UserService.getUser를 통해 사용자 정보 조회 요청 처리
  @Get('/get/:email')
  async getUser(@Param('email') email: string) {
    return await this.userService.getUser(email);
  }

  // GET /user/getalluser 경로로 접근하는 요청을 처리하는 엔드포인트
  // UserService.getAllUser를 통해 모든 사용자 정보 조회 요청 처리
  @Get('/getall')
  async getAllUser() {
    return await this.userService.getAllUser();
  }

  // PUT /user/updateuser/:email 경로로 접근하는 요청을 처리하는 엔드포인트
  // UserService.updateUser를 통해 사용자 정보 업데이트 요청 처리
  @Put('/update/:email')
  updateUser(@Param('email') email: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(email, user);
  }

  // DELETE /user/delete/:email 경로로 접근하는 요청을 처리하는 엔드포인트
  // UserService.deleteUser를 통해 사용자 삭제 요청 처리
  @Delete('/delete/:email')
  deleteUser(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }

  // DELETE /user/deleteall 경로로 접근하는 요청을 처리하는 엔드포인트
  // UserService.deleteAllUser를 통해 모든 사용자 삭제 요청 처리
  @Delete('/deleteall')
  deleteAllUser() {
    return this.userService.deleteAllUser();
  }
}
