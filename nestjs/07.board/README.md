# Board
#### ⚪ About Project
* ##### 인증된 사용자가 작성한 게시글은 사용자에게 종속된 접근권한 분리형 게시판 서비스
* ##### 게시글, 유저 API, 관계형 데이터 베이스인 Postgresql로 권한분리 구현
* ##### 인증 API, Passport(Jwt-Strategy), Jwt accessToken을 사용한 인증 구현

- - -

#### ⚪ Running Screen || Video
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

- - -

#### ⚪ Built With
<p align="center">
  <img alt="Html" src ="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/postgresql-4169E1.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
</p>

- - -

#### ⚪ Getting Started
```bash
# Prerequisites: npm, node, Postgresql
# execution
git clone https://github.com/MpqM/NestJS_Board.git
npm install
npm run start
```

- - -

#### ⚪ Description 
* ##### User
  * ##### createUser: 사용자 엔티티 생성 및 저장
  * ##### getUser: 주어진 이메일을 이용해 사용자 조회
  * ##### getAllUser: 모든 사용자 조회 후 반환
  * ##### updateUser: 주어진 이메일을 이용해 사용자 조회 후 사용자 객체 비밀번호 해시 후 업데이트
  * ##### deleteUser: 주어진 이메일을 이용해 사용자 삭제
* ##### Board
  * ##### createBoard: 게시물 엔티티 생성 및 저장
  * ##### getBoard: 주어진 ID를 이용해 게시글 조회
  * ##### getAllBoard: 유저가 가진 모든 게시글 조회
  * ##### updateBoard: 유저가 가진 게시글 업데이트
  * ##### deleteBoard: 유저가 가진 게시글을 삭제
* ##### Auth
  * ##### register: getUser로 사용자 존재여부 확인, 비밀번호 해시화후 createUser에 주입해 사용자 등록
  * ##### login: getUser로 사용자 존재여부 확인, 비밀번호 비교후 JWT accessToken 생성
* ##### Else
  * ##### PassPort와 JWT Strategy를 이용한 사용자 인증, Guard를 통한 핸들러 메서드에 전달전 검증
  * ##### TypeORM 설정과 Entity를 통한 Postgresql 연동
  * ##### Class-validator, ValidationPipe를 통한 유효성 검증
  * ##### User와 Board Entity간 관계형성으로 접근권한 분리

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -
