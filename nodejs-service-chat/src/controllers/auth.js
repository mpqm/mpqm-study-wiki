const passport = require('passport');
const User = require('../models/user');

// 사용자의 인증 상태를 확인해 사용자 정보 또는 false를 반환
function getAuth(req, res, next) {
    try {
        if (req.isAuthenticated()) {
            res.status(200).json({
                username: req.user.username,
                userId: req.user.id
            })
        }
        else if (!req.isAuthenticated()) { res.status(200).json(false) }
    } catch (err) { next(err) }
}

// 로그인 요청을 처리하고 Passport를 사용해 사용자 인증
function login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) { res.status(401).json({ msg: info }) }
        req.logIn(user, function (err) {
            if (err) return next(err);
            res.status(200).json({ message: "로그인 성공" });
        })
    })(req, res, next);
}

// 회원 가입 요청을 처리하고 사용자를 데이터베이스에 저장
async function register(req, res, next) {
    try {
        const user = new User(req.body);
        await user.save()
        return res.status(200).json({ success: true });
    } catch (err) { next(err) }
}

// 로그아웃 요청을 처리하고 사용자 세션을 종료
function logout(req, res, next) {
    req.logOut(function (err) { if (err) return next(err) })
    res.status(200).json({ message: "로그아웃 성공" });
}

module.exports = { getAuth, login, register, logout }