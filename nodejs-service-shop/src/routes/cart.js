const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

// 장바구니 경로(/cart) 요청 라우팅
router.get('/', cartController.renderCart);
router.post('/:productId', cartController.addCart);
router.get('/update/:productId',cartController.updateCart);
router.delete('/', cartController.clearCart);
router.get('/complete-order', cartController.completeOrder);

module.exports = router;