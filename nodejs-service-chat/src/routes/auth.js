const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

// router
router.get('/getAuth', authController.getAuth)
router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/logout', authController.logout)

module.exports = router