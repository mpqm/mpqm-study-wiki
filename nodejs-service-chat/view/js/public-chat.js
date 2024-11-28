const socket = io('http://localhost:4000/', { autoConnect: false });
const query = new URLSearchParams(location.search) // url에서 parameter가져옴
const chatname = query.get('chatname'); // chatname
const username = localStorage.getItem('session-username'); // 로컬 스토리지에서 사용자 이름 가져옴
const userId = localStorage.getItem('session-userId'); // 로컬 스토리지에서 사용자 ID 가져옴
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML; // 사이드바 템플릿
const messageToTemplate = document.querySelector('#message-to-template').innerHTML; // 메시지 템플릿
const messageFromTemplate = document.querySelector('#message-from-template').innerHTML; // 메시지 템플릿
const messages = document.querySelector('#messages') // 메시지 목록 요소
const messageForm = document.querySelector('#message-form') // 메시지 전송 폼 요소
const messageFormInput = document.querySelector('#message-form-input') // 메시지 입력 필드
const messageFormBtn = document.querySelector('#message-form-btn') // 메시지 전송 버튼
function scrollToBottom() { messages.scrollTop = messages.scrollHeight; } // 메시지 목록을 화면 하단으로 스크롤

// 페이지 로드 시, 사용자 이름과 ID가 있으면 소켓에 연결, 벡업 메시지 가져옴
document.addEventListener("DOMContentLoaded", function () {
    if (username && userId) { socketConnect(username, userId) }
    else { window.location.href = '/index.html'; }
    axios.get(`/chat/getChatMessage/${chatname}`)
        .then(function (res) {
            res.data.forEach(msg => {
                if (msg.username === username) {
                    const html = Mustache.render(messageFromTemplate, {
                        username: msg.username,
                        message: msg.text,
                        createdAt: moment(msg.createdAt).format('hh:mm a')
                    });
                    messages.insertAdjacentHTML('beforeend', html);
                    scrollToBottom();
                } else {
                    const html = Mustache.render(messageToTemplate, {
                        username: msg.username,
                        message: msg.text,
                        createdAt: moment(msg.createdAt).format('hh:mm a')
                    });
                    messages.insertAdjacentHTML('beforeend', html);
                    scrollToBottom();
                }
            })
        })
        .catch(function (err) { alert('서버 오류', err) })
})

// 소켓에 연결하는 함수
const socketConnect = async (username, userId) => {
    socket.auth = { username, userId };
    await socket.connect();
}

// 채팅방에 참가
socket.emit('join', { chatname }, (err) => {
    if (err) {
        alert(err)
        location.href = '/home.html';
    }
})

// 채팅 데이터 및 사용자 정보 수신 및 사이드바 업데이트
socket.on('chat-data', ({ chatname, users }) => {
    const usersData = users.map(username => ({ username }))
    const html = Mustache.render(sidebarTemplate, { chatname, users: usersData })
    document.querySelector('#sidebar').innerHTML = html
})

// 채팅 메시지 수신 및 화면에 표시
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
})

// 메시지 폼 제출 시, 서버에 메시지 전송
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageFormBtn.setAttribute('disabled', 'disabled')
    socket.emit('send-message', e.target.elements.message.value, username, chatname, (err) => {
        messageFormBtn.removeAttribute('disabled')
        messageFormInput.value = '';
        messageFormInput.focus();
        if (err) { return console.log(err); }
    })
})



