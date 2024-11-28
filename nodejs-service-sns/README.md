# nodejs-service-sns
#### ⚪ About Project
* ##### NodeJS로 SNS 기본 기능 구현
* ##### Passport(local, google), cookie-session 인증
* ##### 게시글 불러오기, 생성, 수정, 삭제 / 댓글 불러오기, 생성, 수정, 삭제
* ##### 파일 업로드, 좋아요, 친구 추가 및 삭제, 프로필 수정

- - -

#### ⚪ Running Screen || Video
<p align ="center">
  <a href="https://www.youtube.com/watch?v=-PwSEkOKk4E"><img src ="https://img.shields.io/badge/youtube-FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"/></a>
  </br>
  <img src="../wiki-images/nodejs-service-sns/메인 이미지1.png">
</p>

- - -

#### ⚪ Built With
| **Category** |**Skills**| 
|-------------|---------|
|**Language**| ![HTML5](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) |
|**Frontend**| ![ejs](https://img.shields.io/badge/ejs-B4CA65.svg?&style=for-the-badge&logo=ejs&logoColor=white) 
|**Backend**| ![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white) ![passport](https://img.shields.io/badge/passport-34E27A?style=for-the-badge&logo=passport&logoColor=white) ![oauth](https://img.shields.io/badge/oauth-4285F4?style=for-the-badge&logo=google&logoColor=white)|
| **Database**| ![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)|
| **Env**|![npm](https://img.shields.io/badge/npm-D24939?style=for-the-badge&logo=npm&logoColor=white) ![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) 

- - -

#### ⚪ Getting Started
```bash
# Prerequisites: npm, node, mongodb(docker), Google Oauth Client
# execution
docker-compose up -d
git clone https://github.com/mpqm/nodejs-service-sns.git
npm install
npm start
```

- - -

#### ⚪ Description
* ##### Post
    * ##### multer를 이용해 파일업로드 가능한 게시글 생성, 게시글 삭제, 수정
    * ##### 사용자 및 친구의 게시글을 조회, 댓글 생성, 삭제, 수정
    * ##### 이미 누르거나 눌리지 않은 좋아요를 구분해 처리하는 좋아요 기능
* ##### Friend: 가입된 사용자들 정보 기반 알 수 있는 사람들 표시, 친구 요청 추가/취소, 친구 삭제
* ##### Profile: 사용자, 친구 및 다른 사용자의 프로필 확인 및 자신의 프로필 수정 가능
* ##### else
  * ##### Passport.isAuthenticated()를 이용한 미들웨어로 리소스, 라우팅 비인가 접근 보호
  * ##### 페이지 이동시 오류, 성공 메시지를 보이기 위해 flash 사용 및 res.locals 객체에 user 정보 저장

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -
