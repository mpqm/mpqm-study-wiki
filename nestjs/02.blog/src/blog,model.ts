// 블로그 포스트를 나타내는 데이터 전송 객체 (DTO)
export interface PostDto {
  id: string; // 블로그 포스트의 고유 식별자
  title: string; // 블로그 포스트의 제목
  content: string; // 블로그 포스트의 내용, 본문
  name: string; // 블로그 포스트의 작성자
  createdDt: Date; // 블로그 포스트의 작성 날짜
  updatedDt?: Date; // 블로그 포스트의 마지막으로 업데이트된 날짜
}
