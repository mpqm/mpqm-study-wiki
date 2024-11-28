const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 유저 스키마
const userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String, minLength: 3 },
    googleId: { type: String, unique: true, sparse: true },
    username: { type: String, required: true, trim: true, },
    admin: {type: Number, default: 0 } // 0 - 일반 1 - admin
})

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


userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

const User = mongoose.model('User', userSchema);

module.exports = User;