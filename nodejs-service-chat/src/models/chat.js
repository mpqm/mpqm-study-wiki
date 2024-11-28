const mongoose = require('mongoose');

// MongoDB 채팅 스키마 정의
const chatSchema = mongoose.Schema({
    chatname: { type: String, unique: true }, // 채팅방 이름
    users: [{ type: String }], // 채팅 참가자이름들
    isPublic: { type: Boolean }, // 공개채팅, 개인채팅 여부
    message: [{ // 채팅 메시지 배열
        username: { type: String, sparse: true }, // 메시지 보낸 사용자 이름
        text: { type: String, sparse: true }, // 메시지 본문
        createdAt: { type: Date, default: Date.now, sparse: true } // 메시지 생성 시간
    }]
})

// Chat 모델을 생성
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;