import { IsEmail, IsString, Length, Matches } from 'class-validator';

// UserDto 클래스는 사용자 정보를 전달하기 위한 데이터 전송 객체
export class UserDto {
  // 이메일이 이메일 형식, 문자열 형식인지 검사하는 class-validator
  @IsEmail()
  @IsString({ message: 'Email must be a string' })
  email: string;

  // 유저이름이 문자열 형식, 3~20길이 인지 검사하는 class-validator
  @IsString({ message: 'Username must be a string' })
  @Length(3, 20, { message: 'Username must be between 4 and 20 characters' })
  username: string;

  // 비밀번호가 문자열형식, 4~20사이 길이 인지, 영문자와 숫자만 포함하는지 검사하는 class-validator
  @IsString({ message: 'Password must be a string' })
  @Length(4, 20, { message: 'Password must be between 4 and 20 characters' })
  @Matches(/^[a-zA-z0-9]*$/, {
    message: 'Password only accepts english and number',
  })
  password: string;
}
