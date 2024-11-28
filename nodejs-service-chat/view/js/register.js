const registerBox = document.querySelector(".register-box form"); // 회원가입 폼 요소
const loginLink = document.querySelector("#login-link"); // 로그인 링크 요소

// 페이지 로드 시, 이미 로그인한 사용자가 로그인 페이지에 접근하는 것을 방지하기 위해 사용자 인증 정보를 가져옴
document.addEventListener("DOMContentLoaded", function () {
    axios.get('/auth/getAuth')
        .then(function (res) { if (res.data.username) { window.location.href = '/home.html'; } })
        .catch(function (err) { alert('서버 오류'); });
});

// 회원가입 폼 제출 시, 사용자 정보를 서버로 보내 회원가입 시도
registerBox.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = registerBox.querySelector('input[name="username"]').value;
    const password = registerBox.querySelector('input[name="password"]').value;
    const userData = { username: username, password: password, };
    axios.post('/auth/register', userData)
        .then(function (res) { if (res.status === 200) { window.location.href = '/index.html'; } })
        .catch(function (err) { alert('회원가입 실패'); });
});

// 로그인 링크 클릭 시, 로그인 페이지로 이동
loginLink.addEventListener("click", function () { window.location.href = "/index.html"; });