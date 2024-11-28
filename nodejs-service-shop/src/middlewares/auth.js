// 인증 되었는지 확인, 아니면 로그인 페이지로 리다이렉트
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
}

// 인증이 되었는지 확인 후 게시글 페이지로 리다이렉트
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {return res.redirect('/product');}
    next();
}

// 어드민인지 확인후 관리자 페이지 접근 허가 및 거부
function checkAdmin(req, res, next) {
    if (req.isAuthenticated() && res.locals.currentUser.admin === 1) { next();} 
    else {
        req.flash('error', '관리자로 로그인하십니오.');
        res.redirect('back');
    }
}

module.exports = { checkAdmin, checkAuthenticated, checkNotAuthenticated }