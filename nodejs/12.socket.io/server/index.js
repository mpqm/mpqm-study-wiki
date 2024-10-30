const http = require('http').createServer();

const io = require('socket.io')(http, {cors: {origin:"*"}})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('message', (message) => {
        io.emit('message', `${socket.id.substr(0.5)} said ${message}`)
    })
})

http.listen(8080, () => {console.log('listening on http://localhost:8080')})



// const WebSocket = require('ws')
// const wss = new WebSocket.Server({port:4000});

// wss.on('connection', (ws) => {
//     ws.send('connected');
//     ws.on('message', (messsageFromClient) =>{
//         const message = JSON.parse(messsageFromClient);
//         console.log('message', message)
//     })
// })