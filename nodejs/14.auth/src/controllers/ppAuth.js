const passport = require('passport');
const User = require('../models/user')

// 로그인 컨트롤러 함수
function login(req, res, next){
    console.log(req.body)
    passport.authenticate("local", (err, user, info) => {
        if(err) return next(err);
        if(!user) {
            console.log("no user found");
            return res.json({msg:info})
        }
        req.logIn(user, function(err) {
            if(err) return next(err);
            res.redirect('/ppauth/')
        })
    })(req, res, next);
}

// 회원가입 컨트롤러 함수
async function register(req, res, next) {
    const user = new User(req.body);
    try {
        await user.save()
        return res.status(200). json({success: true});
    } catch (err) { console.log(err) }
}

// 로그아웃 컨트롤러 함수
function logout(req, res, next ) {
    req.logOut(function (err) {
        if(err) return next(err)
        res.redirect('/ppauth/login')
    })
}

// Google 로그인 컨트롤러 함수
function googleLogin(req, res, next) {
    passport.authenticate('google')(req, res, next);
}

// Google 로그인 콜백 컨트롤러 함수
function googleCallback(req, res, next) {
    passport.authenticate('google', {
        successRedirect: '/ppauth',
        failureRedirect: '/login',
    })(req, res, next);
}

// Kakao 로그인 컨트롤러 함수
function kakaoLogin(req, res, next) {
    passport.authenticate('kakao')(req, res, next);
}

// Kakao 로그인 콜백 컨트롤러 함수
function kakaoCallback(req, res, next) {
    passport.authenticate('kakao', {
        successRedirect: '/ppauth',
        failureRedirect: '/login',
    })(req, res, next);
}

module.exports = {login, register, logout, googleLogin, googleCallback, kakaoLogin, kakaoCallback}