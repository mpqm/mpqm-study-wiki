const Chat = require('../models/chat');

// 공개 채팅 생성 요청을 처리하고 데이터베이스에 저장
async function createPublicChat(req, res, next) {
    try {
        const chat = new Chat(req.body)
        await chat.save();
        res.status(200).json(chat)
    } catch (err) { next(err); }
}

// 개인 채팅 생성 요청을 처리하고 데이터베이스에 저장
async function createPrivateChat(req, res, next) {
    try {
        if (req.body.isPublic === false) {
            const [user1, user2] = req.body.chatname.split('-')
            const chatname1 = `${user1}-${user2}`;
            const chatname2 = `${user2}-${user1}`;
            const exchat1 = await Chat.findOne({ chatname: chatname1 });
            if (exchat1) { return res.status(200).json(exchat1); }
            const exchat2 = await Chat.findOne({ chatname: chatname2 });
            if (exchat2) { return res.status(200).json(exchat2); }
            const chat = new Chat(req.body)
            await chat.save();
            res.status(200).json(chat)
        }
    } catch (err) { next(err); }
}
// 공개 채팅방의 채팅방 이름 목록을 가져오는 요청을 처리
async function getPublicChatNames(req, res, next) {
    try {
        const publicChat = await Chat.find({ isPublic: true }, 'chatname');
        const publicChatNamesArr = publicChat.map(i => i.chatname);
        res.status(200).json(publicChatNamesArr);
    } catch (err) { next(err); }
};

// 특정 채팅방의 메시지 목록을 가져오는 요청을 처리
async function getChatMessage(req, res, next) {
    try {
        const chat = await Chat.findOne({ chatname: req.params.chatname });
        res.status(200).json(chat.message);
    } catch (err) { next(err); }
}

module.exports = { createPublicChat, createPrivateChat, getPublicChatNames, getChatMessage };
