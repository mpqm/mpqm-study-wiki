const { joinUser, removeUser, createMessage, getUserInChat, backupMessage } = require("./chat");

module.exports = (io) => {
    let users = [];
    io.on('connection', (socket) => {
        // 새로운 소켓 연결 시
        console.log('socket connected', socket.username, socket.id)
        let userData = { username: socket.username, userId: socket.id }
        users.push(userData);
        io.emit('users-data', { users: users })

        // 'join' 이벤트를 처리하여 사용자가 채팅방에 참여
        socket.on('join', async (options, callback) => {
            const { error, user } = await joinUser({ id: socket.id, username: socket.username, ...options })
            if (error) return callback(error)
            socket.join(user.chatname)
            // 공개/개인 채팅방에 참여한 경우
            if (user.isPublic === true) {
                socket.emit('message', createMessage('Admin', `${user.chatname} 공개채팅에 오신 걸 환영합니다.`))
                socket.broadcast.to(user.chatname).emit('message', createMessage('Admin', `${user.username}가 공개채팅에 참여했습니다.`))
                const users = await getUserInChat(user.chatname)
                io.to(user.chatname).emit('chat-data', { chatname: user.chatname, users: users })
            } else {
                socket.emit('message', createMessage('Admin', `${user.chatname} 개인채팅에 오신 걸 환영합니다.`))
                socket.broadcast.to(user.chatname).emit('message', createMessage('Admin', `${user.username}가 개인채팅에 참여했습니다.`))
            }
            callback()
        })

        // 'send-message' 이벤트를 처리하여 메시지 전송
        socket.on('send-message', async (message, username, chatname, callback) => {
            io.to(chatname).emit('message', createMessage(username, message))
            backupMessage(username, chatname, message)
            callback()
        })

        // 소켓 연결 해제 시
        socket.on('disconnect', async () => {
            console.log('socket disconnected', socket.username, socket.id)
            const { user } = await removeUser(socket.id)
            if (user && user.chatname) {
                users = users.filter(user => user.userId !== socket.id)
                io.emit('users-data', { users: users })
                io.to(user.chatname).emit('message', createMessage('Admin', `${user.username}가 방을 나갔습니다`))
                io.to(user.chatname).emit('chat-data', {
                    chatname: user.chatname,
                    users: await getUserInChat(user.chatname)
                })
            }
        })
    });
};
