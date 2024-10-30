// 사용자가 인증되었는지 확인하는 미들웨어
function checkAuthenticated(req, res, next) {
     // Passport의 isAuthenticated() 메서드를 사용하여 사용자가 인증되었는지 확인, 인증 되었으면 다음 미들웨어로 제어를 넘김
    if(req.isAuthenticated()) {return next()}
    // 사용자가 인증되지 않은 경우 로그인 페이지로 리다이렉트
    res.redirect('/ppauth/login')
}

// 사용자가 비인증 상태인지 확인하는 미들웨어
function checkNotAuthenticated(req, res, next) {
    // Passport의 isAuthenticated() 메서드를 사용하여 사용자가 인증되지 않았는지 확인, 인증된 경우 홈페이지로 리다이렉트
    if(req.isAuthenticated()) {return res.redirect('/ppauth/')}
    // 비인증 상태인 경우 다음 미들웨어로 제어를 넘김
    next();
}

module.exports = {checkAuthenticated, checkNotAuthenticated}