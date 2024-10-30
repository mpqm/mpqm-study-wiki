const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const path = require("path")
const { addUser, getUsersInRoom, getUser, removeUser } = require("./socket/users")
const { generateMessage } = require("./socket/messages")

const port = 4000
const publicDirPath = path.join(__dirname, '../public')

const app = express()
app.use(express.json())
app.use(express.static(publicDirPath))

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('socket connected', socket.id)
    
    socket.on('join', (options, callback) => {
        const {error, user} = addUser({id: socket.id, ...options})
        if(error) return callback(error)
        socket.join(user.roomName)
        socket.emit('message', generateMessage('Admin', `${user.roomName} 방에 오신 걸 환영합니다.`))
        socket.broadcast.to(user.roomName).emit('message', generateMessage(`${user.userName}가 방에 참여했습니다.`))
        io.to(user.roomName).emit('roomData', {roomName: user.roomName, users: getUsersInRoom(user.roomName)})
        callback()
    })
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.roomName).emit('message', generateMessage(user.userName, message))
        callback()
    })
    socket.on('disconnect', () => {
        console.log('socket disconnected', socket.id)
        const user = removeUser(socket.id)
        if(user) {
            io.to(user.roomName).emit('message', generateMessage('Admin', `${user.userName}가 방을 나갔습니다`))
            io.to(user.roomName).emit('roomData', {
                room: user.roomName,
                users: getUsersInRoom(user.roomName)
            })
        }
    })
})


server.listen(port, () => { console.log(`Server is Running on http://localhost:${port}`) })