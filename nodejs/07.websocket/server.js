const webSocket = require('ws');
const server = new webSocket.Server({port: 3000});
server.on('connection', ws => {
    ws.send('server 접속');
    ws.on('message', message => {
        ws.send(`server 응답: ${message}`);
    })
    ws.on('close', () => {
        console.log('client 접속 종료');
    })
})