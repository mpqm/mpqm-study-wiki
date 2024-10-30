import { IsIn, IsString } from 'class-validator';

// BoardDto 클래스는 새로운 게시물을 생성할 때 사용되는 데이터 전송 객체
export class BoardDto {
  // 게시물의 제목을 나타내는 속성
  @IsString({ message: 'Title must be a string' })
  title: string;

  // 게시물의 내용을 나타내는 속성
  @IsString({ message: 'Desc must be a string' })
  desc: string;

  // 게시물의 공개 여부를 나타내는 속성, 'PRIVATE' 또는 'PUBLIC' 중 하나의 값만 허용
  @IsString({ message: 'Status must be a string' })
  @IsIn(['PRIVATE', 'PUBLIC'], {message: 'Status should be either PRIVATE or PUBLIC',})
  status: string;
}
