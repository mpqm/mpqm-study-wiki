const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// 사용자 스키마 정의
const userSchema = mongoose.Schema({
    email: { type: String, unique: true }, // 이메일 필드 (중복 불가)
    password: { type: String, minLength: 3 }, // 비밀번호 필드 (최소 길이 3)
    googleId: { type: String, unique: true, sparse: true }, // Google OAuth ID (중복 가능, 값이 없을 수도 있음)
    kakaoId: { type: String, unique: true, sparse: true } // Kakao OAuth ID (중복 가능, 값이 없을 수도 있음)
})

// 비밀번호 저장 전 해싱하는 프리-세이브 훅
userSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) { // 비밀번호가 변경된 경우에만 해싱 수행
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hashedPassword) {
                if (err) return next(err);
                user.password = hashedPassword; // 해싱된 비밀번호로 교체
                next();
            })
        })
    } else { next(); } // 비밀번호가 변경되지 않은 경우 스킵
})

// 비밀번호 비교 메서드
userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch); // 비밀번호 일치 여부를 콜백으로 반환
    })
}

const User = mongoose.model('User', userSchema); // 사용자 모델 생성

module.exports = User;
