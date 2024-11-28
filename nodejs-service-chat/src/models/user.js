const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// MongoDB 유저 스키마 정의
const userSchema = mongoose.Schema({
    username: { type: String, unique: true }, // 유저이름
    password: { type: String, minLength: 3 }, // 비밀번호
    socketId: { type: String, sparse: true }, // 소켓 ID
    chatname: { type: String, sparse: true }, // 현재 속한 채팅방 이름
})

// 비밀번호 저장 전 해싱 처리
userSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hashedPassword) {
                if (err) return next(err);
                user.password = hashedPassword;
                next();
            })
        })
    } else { next(); }
})

// 비밀번호 비교 메서드
userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

// User 모델 생성
const User = mongoose.model('User', userSchema);

module.exports = User;