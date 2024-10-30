const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;

// 사용자 객체를 세션에 저장하기 위한 serializeUser 메서드
passport.serializeUser((user, done) => { done(null, user.id); })

// 세션에 저장된 사용자 정보를 조회하기 위한 deserializeUser 메서드
passport.deserializeUser((id, done) => { User.findById(id).then(user => {done(null, user);}) })

// 로컬 전략 설정 (이메일 및 패스워드를 사용한 인증)
const localStrategyConfig = new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }) 
        .then(user => {
            if (!user) { return done(null, false, { msg: `email ${email} not found` }); }
            user.comparePassword(password, (err, isMatch) => {
                if (err) { return done(err); }
                if (isMatch) { return done(null, user); }
                return done(null, false, { msg: 'invalid email or password' });
            });
        })
        .catch(err => { return done(err); });
});
passport.use('local', localStrategyConfig);

// Google OAuth2 전략 설정
const googleStrategyConfig = new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID, clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: '/ppauth/google/callback', scope: ['email', 'profile']
},  (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
        .then(existingUser => {
            if(existingUser) {return done(null, existingUser);}
            else{ 
                const user = new User()
                user.email = profile.emails[0].value;
                user.googleId = profile.id;
                console.log(user)
                user.save()                
                .then(savedUser => { done(null, savedUser);})
                .catch(err => { return done(err); });
            }
        })
        .catch(err => {return done(err)})
});
passport.use('google', googleStrategyConfig);

// Kakao OAuth2 전략 설정
const kakaoStrategyConfig = new KakaoStrategy({
    clientID: process.env.KAKAO_CLIENT_ID,
    callbackURL: '/ppauth/kakao/callback',
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({kakaoId: profile.id})
    .then(existingUser => {
        if (existingUser) { return done(null, existingUser); } 
        else {
            const user = new User();
            user.kakaoId = profile.id;
            user.email = profile._json.kakao_account.email;
            user.save()                
            .then(savedUser => { done(null, savedUser);})
            .catch(err => { return done(err); });
        }
    })
    .catch(err => {return done(err)})
})
passport.use('kakao', kakaoStrategyConfig);