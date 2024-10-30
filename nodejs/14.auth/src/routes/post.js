const express = require('express');
const postController = require('../controllers/post');
const authMiddleware  = require('../middlewares/jwtAuth');
const router = express.Router();

// 게시물 목록을 가져오는 라우터 JWT 토큰을 검증하는 authMiddleware를 거친 후에만 접근 가능
router.get('/', authMiddleware, postController.getPosts);

module.exports = router