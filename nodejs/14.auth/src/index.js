const express = require('express');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
const path = require('path');
const passport = require('passport');
const jwtAuthRouter = require('./routes/jwtAuth'); // JWT 인증 라우터
const postRouter = require('./routes/post'); // 게시물 라우터
const ppAuthRouter = require('./routes/ppAuth'); // Passport OAuth 인증 라우터
const cookieSession = require('cookie-session');
const sessionHandler = require('./middlewares/sessionHandler'); // 세션 미들웨어
require('dotenv').config();
const app = express();

// 쿠키 세션 설정
app.use( cookieSession({ name: 'cookie-session', keys: [process.env.COOKIE_SESSION_ENCRYPT_SECRET], }) );

// 세션 핸들러 미들웨어 적용
app.use(sessionHandler);

// Passport 초기화 및 세션 설정
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 정적 파일 서빙 (public 폴더를 /static 경로로 서빙)
app.use('/static', express.static(path.join(__dirname, 'public')));

// 뷰 엔진 설정 (EJS를 사용)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MongoDB에 연결
mongoose
  .connect(process.env.MONGODB_CONNECTION_URI)
  .then(() => { console.log('MongoDB connected!'); })
  .catch((err) => { console.error('MongoDB connection error:', err); });

// 라우터 설정
app.use('/jwtauth', jwtAuthRouter); // JWT 인증 라우터
app.use('/post', postRouter); // 게시물 라우터
app.use('/ppauth', ppAuthRouter); // Passport OAuth 인증 라우터

// 서버 리스닝
app.listen(process.env.PORT, () => { console.log(`Listening on port ${process.env.PORT}`); });
