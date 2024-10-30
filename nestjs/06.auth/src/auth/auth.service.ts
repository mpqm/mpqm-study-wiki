import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userSerivice: UserService) {}
  // 사용자 등록 메서드
  async register(userDto: CreateUserDto) {
    const user = await this.userSerivice.getUser(userDto.email); // 이메일을 기반으로 사용자 조회
    // 이미 등록된 사용자가 있을 경우 예외 처리
    if (user) {
      throw new HttpException(
        '해당 유저가 이미 있습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const encryptedPassword = bcrypt.hashSync(userDto.password, 10); // 비밀번호 암호화
    try {
      // 암호화된 비밀번호를 사용하여 사용자 생성
      const user = await this.userSerivice.createUser({
        ...userDto,
        password: encryptedPassword,
      });
      user.password = undefined; // 응답에서 비밀번호 제외
      return user;
    } catch (error) {
      throw new HttpException('서버 에러', 500);
    }
  }

  // 사용자 유효성 검사 메서드
  async validateUser(email: string, password: string) {
    const user = await this.userSerivice.getUser(email); // 이메일을 기반으로 사용자 조회
    // 사용자가 없을 경우 예외 처리
    if (!user) {
      throw new HttpException('해당 유저가 없습니다.', HttpStatus.NOT_FOUND);
    }
    // 해시된 비밀번호 추출
    const { password: hashedPassword, ...userInfo } = user;
    // 저장된 해시된 비밀번호와 입력된 비밀번호 비교
    if (bcrypt.compareSync(password, hashedPassword)) {
      return userInfo; // 비밀번호를 제외한 사용자 정보 반환
    }
    return null; // 비밀번호가 일치하지 않을 경우 null 반환
  }
}
