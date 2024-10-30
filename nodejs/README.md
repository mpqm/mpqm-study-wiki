# 14. Auth
#### ⚪ About Project
* ##### jwt 엑세스토큰, 리프레시토큰 사용 인증 구현
* ##### 쿠키세션 + PassPort(Strategy, Session Serializer, deSerializer)를 사용한 인증 구현
* ##### jwt, passport를 통해 인증받은 사용자 만이 리소스에 접근하게 하는 미들웨어 구현
* ##### Mongoose를 이용해 Oauth ID 및 사용자 정보 모델, P/W 함수(저장 전 해싱, 비교) 정의

- - -

#### ⚪ Running Screen || Video
<p align ="center">
  <a href="https://www.youtube.com/watch?v=vQkZ0dgmi9I"><img src ="https://img.shields.io/badge/youtube-FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"/></a>
  </br>
  <img width="700" height="500" src="../docs/img/nodejs/nodejs-auth-1.png"/>
</p>

- - -

#### ⚪ Built With
<p align ="center">
  <img src ="https://img.shields.io/badge/ejs-B4CA65.svg?&style=for-the-badge&logo=ejs&logoColor=white"/> <img src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <img src ="https://img.shields.io/badge/express-339933.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img src ="https://img.shields.io/badge/nodejs-339933.svg?&style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src ="https://img.shields.io/badge/mongodb-339933.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

- - -

#### ⚪ Getting Started
  ```bash
  # prerequisites: npm, node, MongoDB Connection URI, Kakao Client ID, Google Oauth Client ID
  # execution
  git clone https://github.com/MpqM/NodeJS_Auth.git
  # Change the .env with yours
  npm install
  npm start
  # test: http://localhost:3000/ppauth/
  # 소스코드 주석, Postman 참조
  ```

- - -

#### ⚪ Description
* ##### jwt 기반 인증 인가
 <p align ="center"><img src="../docs/img/nodejs/nodejs-auth-2.png"/></p>
 
* ##### jwt 엑세스, 리프레시 토큰
 <p align ="center"><img src="../docs/img/nodejs/nodejs-auth-3.png"/></p>

* ##### Passport를 이용한 쿠키 세션
 <p align ="center"><img src="../docs/img/nodejs/nodejs-auth-4.png"/></p>

* ##### Oauth 인증 흐름
 <p align ="center"><img src="../docs/img/nodejs/nodejs-auth-5.png"/></p>

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -

