// flash로 클라이언트 오류, 성공 메시지 처리 및 user, cart 정보 저장
function flashHandler(req, res, next) {
    res.locals.cart = req.session.cart;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.currentUser = req.user;
    next();
}

module.exports = flashHandler;