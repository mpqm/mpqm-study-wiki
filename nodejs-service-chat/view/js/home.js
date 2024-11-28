const form = document.querySelector("form"); // 폼 요소
const publicChatsTemplate = document.querySelector('#public-chats-template').innerHTML; // 공개 채팅 목록 템플릿
const publicChatList = document.querySelector('#public-chat-list'); // 공개 채팅 목록
const username = document.querySelector("#username"); // 사용자 이름 표시 요소
const logoutBtn = document.querySelector("#logout-btn"); // 로그아웃 버튼 요소
const privateChatLink = document.querySelector("#private-chat-link"); // 개인 채팅 링크 요소

// 페이지 로드 시, 사용자 인증 정보를 가져오기 위해 서버로 요청 전송, 공개 채팅 목록을 가져와 페이지에 표시
document.addEventListener("DOMContentLoaded", function () {
    axios.get('/auth/getAuth')
        .then(function (res) {
            if (res.data === false) { window.location.href = '/index.html'; }
            if (res.data.username) {
                username.textContent = res.data.username;
                localStorage.setItem('session-username', res.data.username);
                localStorage.setItem('session-userId', res.data.userId);
            }
        })
        .catch(function (err) { alert('서버 오류', err); });
    axios.get('/chat/getPublicChatNames')
        .then(function (res) {
            const publicChats = res.data.map(i => ({ publicChatName: i }));
            const html = Mustache.render(publicChatsTemplate, { publicchats: publicChats });
            publicChatList.insertAdjacentHTML('beforeend', html);
        })
        .catch(function (err) { alert('서버 오류', err); });
});

// 폼 제출 시, 공개 채팅을 생성하기 위해 서버로 요청 전송, 성공시 공개 채팅 목록을 로딩하기 위해 페이지 새로고침
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const publicChatName = document.querySelector("input[name='public-chat-name']").value;
    axios.post('/chat/createPublicChat', { chatname: publicChatName, isPublic: true, users: [username.textContent] })
        .then(function (res) { location.reload(); })
        .catch(function (err) { alert("이미 생성된 공개 채팅입니다.", err); });
});

// 공개 채팅 목록에서 특정 채팅요소 클릭 시, 해당 채팅 페이지로 이동
publicChatList.addEventListener('click', function (e) {
    if (e.target.classList.contains('public-chat')) {
        const chatname = e.target.textContent.trim();
        window.location.href = `/public-chat.html?chatname=${chatname}`;
    }
});

// 로그아웃 버튼 클릭 시, 로그아웃 요청 및 인덱스 페이지로 리다이렉션
logoutBtn.addEventListener('click', function () {
    axios.post('/auth/logout')
        .then(function (res) { window.location.href = "/index.html"; })
        .catch(function (err) { alert("서버 오류", err); });
});

// 개인 채팅 링크 클릭 시, 개인 채팅 페이지로 이동
privateChatLink.addEventListener("click", function () { window.location.href = "/private-chat.html"; });
