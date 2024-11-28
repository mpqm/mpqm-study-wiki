const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

// 사용자 객체를 세션에 저장하기 위한 직렬화 함수 설정
passport.serializeUser((user, done) => { done(null, user.id); });

// 세션에서 사용자 객체를 복원하기 위한 역직렬화 함수 설정
passport.deserializeUser((id, done) => { User.findById(id).then(user => { done(null, user); }); });

// Passport Local Strategy의 구성
const localStrategyConfig = new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' }, (username, password, done) => {
        User.findOne({ username: username.toLowerCase() }) // 제공된 사용자 이름과 일치하는 사용자를 데이터베이스에서 찾기
            .then(user => {
                if (!user) { return done(null, false, { msg: `사용자명 "${username}"을 찾을 수 없습니다` }); }
                user.comparePassword(password, (err, isMatch) => { // 제공된 비밀번호를 사용자의 해시된 비밀번호와 비교
                    if (err) { return done(err); }
                    if (isMatch) { return done(null, user); } // 비밀번호가 일치하는 경우, 사용자가 인증됨
                    return done(null, false, { msg: '유효하지 않은 사용자명 또는 비밀번호' }); // 비밀번호가 일치하지 않는 경우
                });
            })
            .catch(err => { return done(err); });
    }
);
passport.use('local', localStrategyConfig);
