// 소켓에서 전달된 사용자 이름과 아이디를 handshake 객체에서 가져오고, 소켓에 저장하는 미들웨어
module.exports = (socket, next) => {
    const username = socket.handshake.auth.username;
    const userId = socket.handshake.auth.userId;
    socket.username = username;
    socket.id = userId;
    next();
};
