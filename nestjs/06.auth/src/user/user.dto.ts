import { IsEmail, IsString } from 'class-validator';

// 새로운 사용자 생성에 사용되는 DTO 클래스
export class CreateUserDto {
  @IsEmail() // 이메일 형식 검증
  email: string; // 사용자 이메일

  @IsString() // 문자열 형식 검증
  password: string; // 사용자 비밀번호

  @IsString() // 문자열 형식 검증
  username: string; // 사용자명
}

// 사용자 정보 업데이트에 사용되는 DTO 클래스
export class UpdateUserDto {
  @IsString() // 문자열 형식 검증
  username: string; // 업데이트할 사용자명

  @IsString() // 문자열 형식 검증
  password: string; // 업데이트할 비밀번호
}
