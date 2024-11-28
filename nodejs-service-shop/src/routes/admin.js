const express = require('express');
const { checkAdmin } = require('../middlewares/auth');
const router = express.Router();
const adminController = require('../controllers/admin');

// 관리자 경로(/admin) 요청 라우팅 - category
router.get('/category', checkAdmin, adminController.renderAdminCategories)
router.get('/category/add', checkAdmin,  adminController.renderAddCategories)
router.post('/category/add', checkAdmin, adminController.addCategory)
router.delete('/category/:id', checkAdmin, adminController.deleteCategory)

// 관리자 경로(/admin) 요청 라우팅 - product
router.get('/product', checkAdmin, adminController.renderAdminProducts)
router.get('/product/add', checkAdmin, adminController.renderAddProduct)
router.post('/product/add', checkAdmin, adminController.addProduct)
router.delete('/product/:id', checkAdmin, adminController.deleteProduct)
router.get('/product/edit/:id', checkAdmin, adminController.renderEditProduct)
router.post('/product/edit/:id', checkAdmin, adminController.editProduct)
router.post('/product/gallery/:id', checkAdmin, adminController.addProductGallery)
router.delete('/product/gallery/:id/:imageId', checkAdmin, adminController.deleteProductGallery)

module.exports = router;