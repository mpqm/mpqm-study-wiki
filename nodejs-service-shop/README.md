- - -
# nodejs-service-shop
<div align="center">
    <img  style="width: 50%" src="../wiki-images/nodejs-service-shop/메인 이미지1.png">
      <h3>
      🌐 시연영상
        <a href="https://www.youtube.com/watch?v=VNUQ4d3GX4Q">유튜브링크</a>
      </h3>

| **Category** |**Skills**| 
|-------------|---------|
|**Language**| ![HTML5](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) |
|**Frontend**| ![ejs](https://img.shields.io/badge/ejs-B4CA65.svg?&style=for-the-badge&logo=ejs&logoColor=white) 
|**Backend**| ![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white) ![passport](https://img.shields.io/badge/passport-34E27A?style=for-the-badge&logo=passport&logoColor=white) ![oauth](https://img.shields.io/badge/oauth-4285F4?style=for-the-badge&logo=google&logoColor=white)|
| **Database**| ![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)|
| **Env**|![npm](https://img.shields.io/badge/npm-D24939?style=for-the-badge&logo=npm&logoColor=white) ![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) 

</div>

## 프로젝트 설명
<details>
	<summary><b> 프로젝트 개요</b></summary>
    <ul>
        <li>NodeJS로 쇼핑몰의 기본 기능 구현, admin 페이지 구현
        </li>
        <li>Passport(local, google), cookie-session 인증
        </li>
        <li>상품 불러오기, 생성, 수정, 삭제 / 카테고리 불러오기, 생성, 삭제
        </li>
        <li>파일 업로드 + dropzone을 이용한 세부 이미지 생성 / 장바구니 불러오기, 추가, 수정, 초기화, PG결제(테스트)
        </li>
    </ul>
</details>

<br>

<details>
	<summary><b> 프로젝트 실행</b></summary>

```bash
# Prerequisites: npm, node, mongodb(docker), Google Oauth Client
# execution
docker-compose up -d
git clone https://github.com/mpqm/nodejs-service-shop.git
npm install
npm start
```

</details>

<br>

## 기능 설명
<details>
	<summary><b> Admin</b></summary>
    <ul>
        <li>인증 미들웨어를 통해 유저 데이터의 admin필드가 1인경우에 관리자 페이지에 접근 가능
        </li>
        <li>카테고리 생성 및 삭제, 카테고리별 상품 페이지 조회 가능
        </li>
        <li>상품 생성, 수정, 삭제, 이미지 업로드로 대표이미지 생성 및 드랍존스크립트로 크기 조절된 세부 이미지 생성
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Cart </b></summary>
    <ul>
        <li>장바구니 불러오기, 추가, 수정, 초기화
        </li>
        <li>장바구니에서 수량 증가, 감소, 삭제를 쿼리($action)를 통해 업데이트
        </li>
        <li>클라이언트에서 PG결제 로직 처리(임시)
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Product(View) </b></summary>
    <ul>
        <li>전체 조회 및 카테고리별 상품 렌더링(대표이미지, 가격, 장바구니 추가, 자세히)
        </li>
        <li>상품에 대한 자세한 정보 확인 페이지 렌더링(상품의 전체 필드 정보)
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Else </b></summary>
    <ul>
        <li> dropzone 스크립트를 이용해 상품 세부 이미지들 생성
        </li>
        <li>Passport.isAuthenticated()를 이용한 미들웨어로 관리자, 리소스, 라우팅 비인가 접근 보호
        </li>
        <li>미들웨어로 페이지 이동시 오류, 성공 메시지를 보이기 위해 flash 사용 및 res.locals 객체에 user, cart 정보 저장
        </li>
    </ul>
</details>
