const express = require('express');
const { getAllCategories } = require('../middlewares/category');
const router = express.Router();
const productController = require('../controllers/product');

// 상품 경로(/product) 요청 라우팅
router.get('/', getAllCategories, productController.renderProduct);
router.get('/:category', getAllCategories, productController.renderProductAsCategory);
router.get('/:category/:product', productController.renderProductDetail);

module.exports = router;