import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './auth.dto';
import { Paylaod } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // 사용자 등록을 처리하는 메서드
  async register(userDto: UserDto): Promise<User> {
    const { email, username, password } = userDto;

    // 이미 같은 이메일을 가진 사용자가 존재하는지 확인
    const user = await this.userService.getUser(email);
    if (user) {
      throw new BadRequestException(`User already exist with email ${email}`);
    }

    // 비밀번호 암호화후 사용자 정보 저장
    const salt = await bcrypt.genSalt();
    const encryptedPassword = bcrypt.hashSync(password, salt);

    // 사용자 생성 및 비밀번호 필드 제거 후 반환
    try {
      const user = await this.userService.createUser({
        ...userDto,
        password: encryptedPassword,
      });
      user.password = undefined;
      return user;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  // 사용자 로그인을 처리하는 메서드
  async login(authDto: AuthDto): Promise<{ accessToken: string } | undefined> {
    const { email, password } = authDto;

    // 해당 이메일로 사용자 조회
    const user = await this.userService.getUser(email);
    if (!user) {
      throw new NotFoundException(`Can't find User with email ${email}`);
    }
    const { password: hashedPassword, email: payloadedEmail } = user;
    // 입력한 비밀번호와 해시된 비밀번호 비교
    if (bcrypt.compareSync(password, hashedPassword)) {
      const payload: Paylaod = { email: payloadedEmail }; // JWT 페이로드 생성
      return { accessToken: this.jwtService.sign(payload) }; // JWT 토큰 생성 및 반환
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
