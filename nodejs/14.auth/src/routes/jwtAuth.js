const express = require('express');
const jwtAuthController = require('../controllers/jwtAuth')
const router = express.Router();

// 로그인 요청 처리, acesstoken 생성 라우터
router.post("/login", jwtAuthController.login)

// acesstoken만료시 refresh 토큰 요청 처리 라우터
router.get("/refreshtoken", jwtAuthController.refreshToken)

module.exports = router