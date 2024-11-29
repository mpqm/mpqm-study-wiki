# nodejs-service-ott
<div align="center">
    <img  style="width: 50%" src="../wiki-images/nodejs-service-ott/메인 이미지1.png">
      <h3>
      🌐 시연영상
        <a href="https://www.youtube.com/watch?v=Kf4-rXis8qU&t=2s">유튜브링크</a>
      </h3>

| **Category** |**Skills**| 
|-------------|---------|
|**Language**| ![HTML5](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![typescript](https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white) |
|**Frontend**| ![React](https://img.shields.io/badge/React.js-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white) 
|**Backend**| ![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)|
| **Database**| ![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)|
| **Env**|![npm](https://img.shields.io/badge/npm-D24939?style=for-the-badge&logo=npm&logoColor=white) ![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) 

## 프로젝트 설명
<details>
	<summary><b> 프로젝트 개요</b></summary>
    <ul>
        <li>넷플릭스 같은 OTT 서비스, 세션을 이용한 유저 인증, Express 기반 REST API 설계
        </li>
        <li>React, NodeJs, Express, MongoDB, TypeScript를 사용해 OTT서비스 앱 구축
        </li>
    </ul>
</details>

<br>

<details>
	<summary><b> 프로젝트 실행</b></summary>

```bash
 # prerequisites: npm, node, MongoDB(docker)
 # execution
 docker-compose up -d
git clone https://github.com/mpqm/nodejs-service-ott.git
 cd backend
 npm install
 npm start
 cd frontend
 npm install
 npm start
```
</details>

## 기능 설명
<details>
	<summary><b> User </b></summary>
    <ul>
        <li>회원가입, 로그인, 로그아웃, 인증정보가져오기, 삭제, 수정, 조회, 전체조회, 쿼리를 통한 월별 유저 가입수 통계
        </li>
        <li>세션 인증 방식을 이용한 사용자 인증 + 로그인, 로그아웃, 회원가입, NAVBAR에서 사용자 이름, 프로필 사진 출력
        </li>
        <li>react-hook을 이용한 커스텀 유효성검증 로그인, 회원가입용 Form 객체 구현
        </li>
        <li>react-router-dom 이용해 라우팅 구현, 삼항연산자 조건식을 사용해 사용자 인증시에만 서비스 이용가능하게 만듬
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Content </b></summary>
    <ul>
        <li>삭제, 생성, 쿼리(type & genre)를 통한 조회 기능
        </li>
        <li>넷플릭스의 슬라이드를 구현하기 위해 Movie를 타입 + 장르별로 배열로 만들어 저장
        </li>
        <li>프론트엔드에서 이중배열로 데이터가 API호출이 나와서 자식배열의 MovieId를 추출하는 로직 구현
        </li>
        <li>장르가 선택되지 않으면 셔플 알고리즘을 통해 가지고 있는 모든 영화를 무작위로 배열
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Movie </b></summary>
    <ul>
        <li>삭제, 작성, 수정, 쿼리를 통한 조회($type, $name)
        </li>
        <li>캐러셀을 이용한 Movie 슬라이더 생성
        </li>
    </ul>
</details>