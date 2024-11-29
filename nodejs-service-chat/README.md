- - -
# nodejs-service-chat

<div align="center">
    <img  style="width: 50%" src="../wiki-images/nodejs-service-chat/메인 이미지1.png">
      <h3>
      🌐 시연영상
        <a href="https://www.youtube.com/watch?v=LVwr8A8msis">유튜브링크</a>
      </h3>

| **Category** |**Skills**| 
|-------------|---------|
|**Language**| ![HTML5](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) |
|**Frontend**| ![mustache.js](https://img.shields.io/badge/mustache.js-3776AB?style=for-the-badge&logo=mustache.js&logoColor=white) ![socketdotio](https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white) |
|**Backend**| ![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white) ![socketdotio](https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white) ![passport](https://img.shields.io/badge/passport-34E27A?style=for-the-badge&logo=passport&logoColor=white)|
| **Database**| ![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)|
| **Env**|![npm](https://img.shields.io/badge/npm-D24939?style=for-the-badge&logo=npm&logoColor=white) ![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) 

</div>

## 프로젝트 설명
<details>
	<summary><b> 프로젝트 개요</b></summary>
    <ul>
        <li>Socket.io를 이용해 개인 채팅방과 공개 채팅(그룹)방을 구현한 채팅 앱 서비스 구축
        </li>
        <li>MongoDB를 이용해 채팅 메시지와 채팅방이름을 저장하고, 각 채팅방 복원 가능
        </li>
    </ul>
</details>

<br>

<details>
	<summary><b> 프로젝트 실행</b></summary>

```bash
# Prerequisites: npm, node, mongodb(docker)
# execution
docker-compose up -d
git clone https://github.com/mpqm/nodejs-service-chat.git
npm install
npm start
```

</details>

## 기능 설명
<details>
	<summary><b> Public Chat </b></summary>
    <ul>
        <li>공개채팅방을 생성한 사용자는 그 방의 관리자가 됨, 모두에게 채팅방이 공개되어 모두가 참여
        </li>
        <li>관리자가 아닌 사용자는 나갔다 들어오는 경우, 방의 메시지를 복원
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Private Chat</b></summary>
    <ul>
        <li>현재 접속 중인 사용자들의 목록을 불러옴
        </li>
        <li>사용자를 클릭시 사용자와 대화하고자하는 대상과의 채팅방이 생성
        </li>
        <li>대상의 접속이 끊기고 나중에 들어와도 방의 메시지를 복원 
        </li>
    </ul>
</details>
<br>
<details>
	<summary><b> Else </b></summary>
    <ul>
        <li>Passport(local strategy), Cookie Session을 이용한 사용자인증, 로그인, 로그아웃, 회원가입
        </li>
        <li>비밀번호 DB 저장전 해시화 후 저장 및 해시 비교 함수 구현
        </li>
        <li>소켓 미들웨어를 설정해 사용자 이름과 ID를 핸드쉐이크 객체에서 가져오고, 소켓에 저장
        </li>
        <li>메시지를 전송 후에 벡업 과정을 비동기처리로 사용자간 채팅시 영향이 없게 설계
        </li>
        <li>유저 스키마에 SocketId 필드를 통해 사용자를 식별 수행
        </li>
    </ul>
</details>

