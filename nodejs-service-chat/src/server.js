const express = require("express")
const mongoose = require("mongoose")
const http = require("http")
const passport = require('passport');
const { Server } = require("socket.io")
const path = require("path")
const cookieSession = require('cookie-session');
const morgan = require('morgan');
require('dotenv').config();
const sessionHandler = require("./middlewares/session-handler")
const { notFoundHandler, errorHandler } = require("./middlewares/error-handler");
const authRouter = require("./routes/auth")
const chatRouter = require("./routes/chat")
const socketHandler = require("./socket/socket-handler")
const socketMiddleware = require("./socket/socket-middleware")

// Express 애플리케이션 생성, HTTP 서버 생성, Socket.io를 사용해 웹 소켓 서버 생성
const app = express() 
const server = http.createServer(app)
const io = new Server(server)
const rootDir = path.resolve(process.cwd());

// 정적 파일 제공 미들웨어 사용, HTTP 요청 로깅, JSON 요청 파싱
const publicDirPath = path.join(__dirname, '../view/')
app.use(express.static(publicDirPath, { ignore: ['/favicon.ico'] }))
app.use(morgan('dev')) 
app.use(express.json())

// 세션 쿠키 설정, 조작을 위한 미들웨어
app.use(cookieSession({ name: 'cookie-session', keys: [process.env.COOKIE_SESSION_SECRET], })); 
app.use(sessionHandler);

// passport 초기화, 세션관리, 설정파일로드
app.use(passport.initialize()); 
app.use(passport.session());
require('./config/passport'); 

// Mongoose의 strictQuery 설정을 변경, MongoDB 연결
mongoose.set('strictQuery', false); 
mongoose 
    .connect(process.env.MONGODB_CONNECTION_URI) 
    .then(() => console.log('mongodb connection success')) 
    .catch(err => console.log('mongodb connection failed', err.message))

// 라우팅 설정
app.use('/auth', authRouter) 
app.use('/chat', chatRouter)

// 에러 핸들링 미들웨어
app.use(notFoundHandler) 
app.use(errorHandler);

// socket.io에 미들웨어 적용, 웹 소켓 이벤트 처리 함수를 사용해 socket.io 구성
io.use(socketMiddleware)
socketHandler(io) 

// 서버를 지정된 포트에서 시작
server.listen(process.env.PORT, () => { console.log(`Server is Running on http://localhost:${process.env.PORT}`) }) 