# 02. Blog
#### ⚪ About Project
* ##### NestJS로 Blog API 만들기, 의존성 주입, 몽고DB 연동하기 연습
* ##### Blog글 객체에 대한 생성, 조회, 전체조회, 수정, 삭제, 전체삭제기능 API

- - -

#### ⚪ Usage
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

- - -

#### ⚪ Built With
<img alt="Html" src ="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>

- - -

#### ⚪ Getting Strated
* ##### Prerequisites: npm, node, MongoDB Connection URL
```bash
git clone https://github.com/MpqM/NestJS_Blog.git
cd {project}
npm install
# Change YOUR MONGODB CONNECTION STRING in ./src/app.moudle.ts
# development
npm run start
# watch mode
npm run start:dev
# production mode
npm run start:prod
# unit tests
npm run test
# e2e tests
npm run test:e2e
# test coverage
npm run test:cov
```

- - -

#### ⚪ Description 
* ##### getAllPost(): 모든 블로그 글 가져오기
* ##### createPost(): 새로운 블로그 글 작성
* ##### getPost(): 특정 ID의 블로그 글 가져오기
* ##### deletePost(): 특정 ID의 블로그 글 삭제
* ##### deleteAllPost(): 모든 블로그 글 삭제
* ##### updatePost(): 특정 ID의 블로그 글 업데이트
* ##### postman collection으로 테스트 가능

- - -

#### ⚪ Roadmap & Realization & Study
* ##### 디렉토리구조를 직접 설계하지 않아도 강제하기 때문에 편함
* ##### MONGODB말고 로컬 저장소에 블로그 데이터를 저장해봄 ./src/blog.data.json

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -

<br>

- - -

# 06. Auth
#### ⚪ About Project
* ##### 유저생성, 조회, 전체조회, 수정, 삭제, 전체삭제기능 API 사용자 모듈, Sqlite DB를 이용
* ##### 파이프로 유효성검증(Validataion Pipe, Guard, class-validator), Guard를 통한 핸드러 메서드 전 인증검증
* ##### 로그인, 회원가입 API 인증모듈에서 쿠키, 세션과 PassPort(Strategy, Session Serializer)을 사용한 인증 구현
* ##### OAuth2.0을 활용한 구글 로그인 인증, GoogleAuthGuard를 통해 세션 사용

- - -

#### ⚪ Running Screen || Video
<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

- - -

#### ⚪ Built With
<p align ="center">
<img alt="typescript" src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="sqlite" src ="https://img.shields.io/badge/sqlite-003B57.svg?&style=for-the-badge&logo=sqlite&logoColor=white"/> <img alt="postman" src ="https://img.shields.io/badge/postman-FF6C37.svg?&style=for-the-badge&logo=postman&logoColor=white"/>
</p>
  
- - -

#### ⚪ Getting Started
```bash
# prerequisites: npm, node, sqlite viewr vscode extension
# execution
git clone https://github.com/MpqM/NestJS_Auth.git
cd {project}
npm install
npm run start
# test
http://localhost:3000/auth/logingoogle
http://localhost:3000/auth/testloginsession
```

- - -

#### ⚪ Description
<p align ="center">
   <img src="../docs/img/machine-learning/ml-cantraffic-1.png"/>
</p>

* ##### 유저, 인증 모듈, 가드
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-auth-1.png"/>
</p>
 
* ##### 페스포트와 세션을 사용한 인증 과정
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-auth-2.png"/>
</p>
 
* ##### 로그인부터 세션 저장까지 순서도
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-auth-3.png"/>
</p>
  
* ##### OAuth 프로토콜 흐름, 엑세스 토큰 만료시 리프레시 토큰을 통한 재발행
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-auth-4.png"/>
</p>
  
* ##### 구글 OAuth 구현 순서
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-auth-5.png"/>
</p>
  
* ##### GoogleAuthGuard의 동작 순서도
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-auth-6.png"/>
</p>
  
- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -

<br>

- - - 

# 07. Board
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

# 08. Chat
#### ⚪ About Project
* ##### 웹소켓을 사용한 실시간 채팅 구현
* ##### NestJS, 웹소켓 게이트웨이를 통해 서버와 클라이언트간 양방향 통신 지원

- - -

#### ⚪ Running Screen || Video
<p align ="center">
  <a href="https://www.youtube.com/watch?v=1UvK-YwjQaA"><img src ="https://img.shields.io/badge/youtube-FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"/></a>
  </br>
  <img width="700" height="500" src="https://user-images.githubusercontent.com/79093184/260901610-e7dab1f5-c9ab-4a7d-be95-96130f604c49.png">
</p>

- - -

#### ⚪ Built With
<p align ="center">
  <img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="javascript" src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>
</p>

- - -

#### ⚪ Getting Started
```bash
# prerequisites: npm, node
# execution
git clone https://github.com/MpqM/NestJS_Auth.git
cd {project}
npm install
npm run start

```

- - -

#### ⚪ Description
<p align ="center">
   <img src ="../docs/img/nestjs/nestjs-chat-2.png"/>
</p>

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -