import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from 'src/user/user.service'; // UserService를 가져옴

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  // 사용자 객체를 세션에 저장할 때 호출되는 메서드
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user.email); // 사용자 객체 대신 사용자의 이메일을 세션에 저장
  }

  // 사용자 객체를 세션에서 복원할 때 호출되는 메서드
  async deserializeUser(
    payload: any,
    done: (err: Error, payload: any) => void,
  ): Promise<any> {
    const user = await this.userService.getUser(payload); // 이메일로 사용자 정보 조회
    if (!user) {
      done(new Error('No User'), null); // 사용자가 없을 경우 에러 처리
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userInfo } = user; // 비밀번호 제외한 사용자 정보 추출
    done(null, userInfo); // 복원된 사용자 정보를 세션에 저장
  }
}
