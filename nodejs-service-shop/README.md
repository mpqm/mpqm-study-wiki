# nodejs-service-shop
#### ⚪ About Project
* ##### NodeJS로 쇼핑몰의 기본 기능 구현, admin 페이지 구현
* ##### Passport(local, google), cookie-session 인증
* ##### 상품 불러오기, 생성, 수정, 삭제 / 카테고리 불러오기, 생성, 삭제
* ##### 파일 업로드 + dropzone을 이용한 세부 이미지 생성 / 장바구니 불러오기, 추가, 수정, 초기화, PG결제(테스트)

- - -

#### ⚪ Running Screen || Video
<p align ="center">
  <a href="https://www.youtube.com/watch?v=VNUQ4d3GX4Q"><img src ="https://img.shields.io/badge/youtube-FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"/></a>
  </br>
  <img src="../wiki-images/nodejs-service-shop/메인 이미지1.png">
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
git clone https://github.com/mpqm/nodejs-service-shop.git
npm install
npm start
```

- - -

#### ⚪ Description
* ##### Admin
    * ##### 인증 미들웨어를 통해 유저 데이터의 admin필드가 1인경우에 관리자 페이지에 접근 가능
    * ##### 카테고리 생성 및 삭제, 카테고리별 상품 페이지 조회 가능
    * ##### 상품 생성, 수정, 삭제, 이미지 업로드로 대표이미지 생성 및 드랍존스크립트로 크기 조절된 세부 이미지 생성
* ##### Cart
    * ##### 장바구니 불러오기, 추가, 수정, 초기화
    * ##### 장바구니에서 수량 증가, 감소, 삭제를 쿼리($action)를 통해 업데이트
    * ##### 클라이언트에서 PG결제 로직 처리(임시)
* ##### Product(View)
    * ##### 전체 조회 및 카테고리별 상품 렌더링(대표이미지, 가격, 장바구니 추가, 자세히)
    * ##### 상품에 대한 자세한 정보 확인 페이지 렌더링(상품의 전체 필드 정보)
* ##### Else
    * ##### dropzone 스크립트를 이용해 상품 세부 이미지들 생성
    * ##### Passport.isAuthenticated()를 이용한 미들웨어로 관리자, 리소스, 라우팅 비인가 접근 보호
    * ##### 미들웨어로 페이지 이동시 오류, 성공 메시지를 보이기 위해 flash 사용 및 res.locals 객체에 user, cart 정보 저장

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -
