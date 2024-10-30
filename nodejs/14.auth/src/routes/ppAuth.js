const express = require('express');
const ppAuthController = require('../controllers/ppAuth');
const { checkAuthenticated, checkNotAuthenticated } = require('../middlewares/ppAuth');
const router = express.Router();

// 메인 페이지 라우터 (인증된 사용자만 접근 가능), index 뷰 렌더링
router.get('/', checkAuthenticated, (req, res) => {res.render('index')})

// 로그인 페이지 라우터 (비인증 사용자만 접근 가능), login 뷰 렌더링
router.get('/login',checkNotAuthenticated, (req, res) => {res.render('login')})

// 회원가입 페이지 라우터 (비인증 사용자만 접근 가능), register 뷰 렌더링
router.get('/register',checkNotAuthenticated, (req, res) => {res.render('register')})

router.post('/login', ppAuthController.login) // 로그인 요청 처리 라우터
router.post('/register', ppAuthController.register) // 회원가입 요청 처리 라우터
router.post('/logout', ppAuthController.logout) // 로그아웃 요청 처리 라우터

router.get('/google', ppAuthController.googleLogin); // Google 로그인 요청 라우터
router.get('/google/callback', ppAuthController.googleCallback); // Google 로그인 콜백 처리 라우터

router.get('/kakao', ppAuthController.kakaoLogin); // Kakao 로그인 요청 라우터
router.get('/kakao/callback', ppAuthController.kakaoCallback); // Kakao 로그인 콜백 처리 라우터

module.exports = router
