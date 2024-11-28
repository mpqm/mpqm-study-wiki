const socket = io('http://localhost:4000/', { autoConnect: false }); // Socket.io 서버에 연결
const messageFrom = document.querySelector("#message-from-username"); // 메시지 보내는 사용자 표시 요소
const messageTo = document.querySelector("#message-to-username"); // 메시지 받는 사용자 표시 요소
const username = localStorage.getItem('session-username'); // 로컬 스토리지에서 사용자 이름 가져옴
const userId = localStorage.getItem('session-userId'); // 로컬 스토리지에서 사용자 ID 가져옴
const messageToTemplate = document.querySelector('#message-to-template').innerHTML; // 메시지 템플릿
const messageFromTemplate = document.querySelector('#message-from-template').innerHTML; // 메시지 템플릿
const usersTitle = document.querySelector("#users-title"); // 접속 중인 사용자 제목 요소
const usersList = document.querySelector('#users-list'); // 접속 중인 사용자 목록 요소
const messages = document.querySelector('#messages'); // 메시지 목록 요소
const messageForm = document.querySelector("#message-form"); // 메시지 전송 폼 요소
const messageFormInput = document.querySelector('#message-form-input'); // 메시지 입력 필드
const messageFormBtn = document.querySelector('#message-form-btn'); // 메시지 전송 버튼
let chatname // 채널이름(username-username)
function scrollToBottom() { messages.scrollTop = messages.scrollHeight; } // 메시지 목록을 화면 하단으로 스크롤


// 페이지 로드 시, 사용자 이름과 ID가 있으면 소켓에 연결
document.addEventListener("DOMContentLoaded", function () {
    if (username && userId) { socketConnect(username, userId); }
    else { window.location.href = '/index.html'; }
    messageFrom.textContent = username;
    messageForm.style.display = 'none'; 
});

// 소켓에 연결하는 함수
const socketConnect = async (username, userId) => {
    socket.auth = { username, userId };
    await socket.connect();
};

// 특정 사용자 선택 시, 개인 채팅을 생성하고 소켓에 참가, 이미 있는 채팅이면 벡업 메시지를 가져옴
const setActiveUser = (element, username, userId) => {
    const onlineUsers = document.getElementsByClassName('online-users')
    for (let i = 0; i < onlineUsers.length; i++) { onlineUsers[i].style.background = 'white'; }
    element.style.background = 'grey';
    messageForm.style.display = 'flex';
    messageTo.textContent = username;
    const messageFromText = messageFrom.textContent;
    const reqChatname = `${username}-${messageFromText}`;
    axios.post('/chat/createPrivateChat', { chatname: reqChatname, isPublic: false, users: [username, messageFromText] })
        .then(function (res) {
            if (res.data.isPublic === false) {
                chatname = res.data.chatname;
                socket.emit('join', { chatname }, (err) => {
                    if (err) {
                        alert(err);
                        location.href = '/home.html';
                    }
                });
                axios.get(`/chat/getChatMessage/${chatname}`)
                    .then(function (res) {
                        res.data.forEach(message => {
                            if (message.username !== username) {
                                const html = Mustache.render(messageFromTemplate, {
                                    username: message.username,
                                    message: message.text,
                                    createdAt: moment(message.createdAt).format('hh:mm a')
                                });
                                messages.insertAdjacentHTML('beforeend', html);
                                scrollToBottom();
                            } else {
                                const html = Mustache.render(messageToTemplate, {
                                    username: message.username,
                                    message: message.text,
                                    createdAt: moment(message.createdAt).format('hh:mm a')
                                });
                                messages.insertAdjacentHTML('beforeend', html);
                                scrollToBottom();
                            }
                        });
                    })
                    .catch(function (err) { alert('서버 오류', err); });
            }
        })
        .catch(function (err) { alert('서버 오류', err); });
};

// 서버로부터 사용자 목록을 받아와 화면에 표시
socket.on('users-data', ({ users }) => {
    const uniqueUsers = [...new Set(users.map(user => JSON.stringify(user)))].map(strUser => JSON.parse(strUser));
    const idx = uniqueUsers.findIndex(user => user.userId === socket.id);
    if (idx > -1) { uniqueUsers.splice(idx, 1); }
    let ul = `<table class="users-table">`;
    for (const user of uniqueUsers) {
        ul += `
        <tr class="online-users" onclick="setActiveUser(this, '${user.username}', '${user.userId}')">
            <td>${user.username}</td>
        </tr>
        `;
    }
    ul += `</table>`;
    if (uniqueUsers.length > 0) {
        usersTitle.innerHTML = '접속 중인 유저';
        usersTitle.style.color = 'green';
    } else {
        usersTitle.innerHTML = '접속 중인 유저 없음';
        usersTitle.style.color = 'red';
    }
    usersList.innerHTML = ul;
});

// 채팅 메시지를 받아와 화면에 표시
socket.on('message', (message) => {
    if (message.username === username) {
        const html = Mustache.render(messageFromTemplate, {
            username: message.username,
            message: message.text,
            createdAt: moment(message.createdAt).format('hh:mm a')
        });
        messages.insertAdjacentHTML('beforeend', html);
        scrollToBottom();
    } else {
        const html = Mustache.render(messageToTemplate, {
            username: message.username,
            message: message.text,
            createdAt: moment(message.createdAt).format('hh:mm a')
        });
        messages.insertAdjacentHTML('beforeend', html);
        scrollToBottom();
    }
});

// 메시지 폼 제출 시, 서버에 메시지 전송
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageFormBtn.setAttribute('disabled', 'disabled');
    socket.emit('send-message', e.target.elements.message.value, username, chatname, (err) => {
        messageFormBtn.removeAttribute('disabled');
        messageFormInput.value = '';
        messageFormInput.focus();
        if (err) { return console.log(err); }
    });
});
