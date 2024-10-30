import {
  IsEmail,
  IsString,
  Length,
  Matches
} from 'class-validator';

// AuthDto 클래스는 사용자 인증 데이터 전송 객체
export class AuthDto {
  // 사용자 이메일이 이메일인지, 문자열 인지 유효성 검증
  @IsEmail()
  @IsString({ message: 'Email must be a string' })
  email: string;

  // 사용자 비밀번호가 영문자인지 숫자만 허용하는지, 길이, 문자열 인지 검증
  @IsString({ message: 'Password must be a string' })
  @Length(4, 20, { message: 'Password must be between 4 and 20 characters' })
  @Matches(/^[a-zA-z0-9]*$/, {message: 'Password only accepts english and number'})
  password: string;
}
