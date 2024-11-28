const User = require('../models/user')
const Chat = require('../models/chat')

// 사용자가 채팅에 참여할 때 호출되는 함수
const joinUser = async ({ id, username, chatname }) => {
    try {
         // 이미 등록된 사용자라면 소켓 ID와 현재 채팅방 정보를 업데이트
        const exuser = await User.findOne({ username });
        if (exuser) {
            exuser.socketId = id
            exuser.chatname = chatname;
            await exuser.save();
        }
        // 채팅방 정보 조회
        const chat = await Chat.findOne({ chatname });
        if (!chat) { return { error: '채팅을 찾을 수 없습니다.' }; }

        // 사용자가 이미 채팅방에 참여한 경우와 참여하지 않은 경우 처리
        if (chat.users.includes(username)) {
            return { user: { id, username, chatname, isPublic: chat.isPublic } };
        } else {
            chat.users.push(username);
            await chat.save();
            return { user: { id, username, chatname, isPublic: chat.isPublic } };
        }
    } catch (error) { return { error: '사용자 참여 중 오류가 발생했습니다.' }; }
};

// 특정 채팅방의 사용자 목록 조회
const getUserInChat = async (chatname) => {
    const chat = await Chat.findOne({ chatname });
    return chat.users
}

// 채팅방에서 사용자 제거
const removeUser = async (id) => {
    try {
        const exuser = await User.findOne({ socketId: id })
        const username = exuser.username;
        const chatname = exuser.chatname;
        // 유저 정보 업데이트
        await User.updateOne({ socketId: id }, { socketId: null, chatname: null });
        // 채팅방 정보 업데이트
        const chat = await Chat.findOne({ chatname });
        if (chat) {
            chat.users.pull(username);
            await chat.save();
        }
        return { user: {username, chatname} }
    } catch (error) { return { error: '사용자 제거 중 오류가 발생했습니다.' }; }
}

// 메시지 생성
const createMessage = (username, text) => { return { username, text, createdAt: new Date().getTime() } }

// 메시지 백업, 채팅방 message 필드에 저장
const backupMessage = async (username, chatname, text) => {
    const chat = await Chat.findOne({ chatname })
    const createdAt = new Date().getTime()
    chat.message.push({ username, text, createdAt: createdAt })
    await chat.save()
}

module.exports = { removeUser, getUserInChat, joinUser, createMessage, backupMessage }