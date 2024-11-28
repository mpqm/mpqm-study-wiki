const express = require('express');
const router = express.Router();
const { checkNotAuthenticated } = require('../middlewares/auth');

// 루트경로(/) 요청 라우팅
router.get('/', (req, res) => { res.redirect('/product'); });
router.get('/login', checkNotAuthenticated, (req, res) => { res.render('auth/login'); })
router.get('/signup', checkNotAuthenticated, (req, res) => { res.render('auth/signup'); })

module.exports = router;