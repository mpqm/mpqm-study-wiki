const cookieSession = require('cookie-session');
const express = require('express');
const { default: mongoose } = require('mongoose');
const passport = require('passport');
const app = express();
const path = require('path');
const flash = require('connect-flash');
const config = require('config');
const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const adminRouter = require('./routes/admin');
const methodOverride = require('method-override');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const sessionHandler = require('./middlewares/session');
const flashHandler = require('./middlewares/flash');
const { notFoundHandler, errorHandler } = require('./middlewares/error');

require('dotenv').config()
const rootDir = path.resolve(process.cwd());
// // express-session 설정
// app.use(session({ secret: process.env.COOKIE_ENCRYPTION_KEY, cookie: { httpOnly: true, secure: false }, name: 'shop-cookie', resave: false, saveUninitialized: false }))

// cookie-session 설정
app.use(cookieSession({ name: 'cookie-session-name', keys: [process.env.COOKIE_ENCRYPTION_KEY] }))
app.use(sessionHandler)

// flash, 파일업로드, 메서드 오버라이딩 설정
app.use(flash());
app.use(methodOverride('_method'));
app.use(fileUpload());

// Passport 초기화 및 세션 설정
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 뷰 템플릿 ejs 엔진 설정
app.set('views', path.join(rootDir, 'view'));
app.set('view engine', 'ejs');

// MongoDB 연결 설정
mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => { console.log('mongodb connected') })
    .catch((err) => { console.log(err); })

// 정적파일 처리
app.use(express.static(path.join(rootDir, 'view/public')));

// flash 메시지 핸들링 미들웨어 등록
app.use(flashHandler)

// 라우터 등록
app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);

// 에러 핸들링 미들웨어
app.use(notFoundHandler)
app.use(errorHandler)

// 서버시작
app.listen(process.env.PORT, () => { console.log(`Server is Running on http://localhost:${process.env.PORT}`); })