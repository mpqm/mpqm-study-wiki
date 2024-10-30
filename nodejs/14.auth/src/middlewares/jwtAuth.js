const jwt = require('jsonwebtoken');

// JWT를 사용한 인증을 수행하는 미들웨어 함수 정의
function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']; // 인증 헤더에서 토큰 추출
    const token = authHeader && authHeader.split(' ')[1]; // Bearer 토큰 형식에서 실제 토큰 추출
    // 토큰이 없으면 401 Unauthorized 응답 반환
    if (token == null) { return res.sendStatus(401); }

    // 토큰을 검증하고 사용자 정보를 추출
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
        console.log(err); // 에러가 발생했을 경우 콘솔에 로그 출력
        if (err)  return res.sendStatus(403); // 토큰이 유효하지 않으면 403 Forbidden 응답 반환
        req.user = user; // 요청 객체에 사용자 정보 추가
        next(); // 다음 미들웨어로 제어를 넘김
    });
}

module.exports = authMiddleware;
