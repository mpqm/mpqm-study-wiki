const express = require('express');
const homeController = require('../controllers/chat');

const router = express.Router();

// router
router.post('/createPublicChat', homeController.createPublicChat)
router.post('/createPrivateChat', homeController.createPrivateChat)
router.get('/getPublicChatNames', homeController.getPublicChatNames)
router.get('/getChatMessage/:chatname', homeController.getChatMessage)

module.exports = router