const loginForm = document.querySelector(".login-form form"); // 로그인 폼 요소
const registerLink = document.querySelector("#register-link"); // 회원가입 링크 요소

// 페이지 로드 시, 이미 로그인한 사용자가 로그인 페이지에 접근하는 것을 방지하기 위해 사용자 인증 정보를 가져옴
document.addEventListener("DOMContentLoaded", function () {
    axios.get('/auth/getAuth')
        .then(function (res) { if (res.data.username) { window.location.href = '/home.html'; } })
        .catch(function (err) { alert('서버 오류', err); });
});

// 로그인 폼 제출 시, 사용자 정보를 서버로 보내 로그인 시도
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const username = loginForm.querySelector('input[name="username"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;
    axios.post('/auth/login', {username, password})
        .then(function (res) { window.location.href = '/home.html'; })
        .catch(function (err) { alert('로그인 실패', err); });
});

// 회원가입 링크 클릭 시, 회원가입 페이지로 이동
registerLink.addEventListener("click", function () { window.location.href = "/register.html"; });
