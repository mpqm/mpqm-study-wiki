const jwt = require('jsonwebtoken');

let refreshTokens = [] // 사용자의 리프레시 토큰을 저장할 배열

// 로그인 컨트롤러 함수
function login(req, res){
    const userName = req.body.username;
    const user = { name: userName} 
    // 액세스 토큰 및 리프레시 토큰 생성
    const accessToken = jwt.sign(user, process.env.JWT_ACCESS_SECRET, {expiresIn: '30s'}) 
    const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SECRET, {expiresIn: '1d'})
    // 리프레시 토큰을 배열에 추가
    refreshTokens.push(refreshToken)
    // 리프레시 토큰을 쿠키에 설정 (httpOnly 옵션으로 보안 강화)
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24*60*60*1000, })
    res.json({accessToken: accessToken}) // 액세스 토큰을 JSON 응답으로 반환
}

// 리프레시 토큰 갱신 컨트롤러 함수
function refreshToken(req, res) {
    const cookies = req.cookies
    // 쿠키에 리프레시 토큰이 없으면 401 Unauthorized 응답 반환
    if(!cookies?.jwt) return res.sendStatus(401)
    const refreshToken = cookies.jwt;
    // 유효한 리프레시 토큰인지 확인
    if(!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    // 리프레시 토큰을 검증하고 새로운 액세스 토큰 발급
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if(err) return res.sendStatus(403) 
        // 새로운 액세스 토큰 생성
        const accessToken = jwt.sign({name: user.name}, process.env.JWT_ACCESS_SECRET, {expiresIn: '30s'});
        res.json({accessToken}) // 액세스 토큰을 JSON 응답으로 반환
    })
}

module.exports = {login, refreshToken}