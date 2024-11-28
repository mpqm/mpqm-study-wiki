const Product = require("../models/product");
const fs = require('fs-extra');

// 홈(상품) 페이지 렌더링 컨트롤러
async function renderProduct(req, res, next) {
    try {
        const products = await Product.find();
        req.flash('success', '상품들을 불러오는데 성공했습니다.');
        res.render('product', { products });
    } catch (error) {
        req.flash('error', '상품들을 불러오는데 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 카테고리 별 상품 페이지 렌더링 컨트롤러
async function renderProductAsCategory(req, res, next) {
    const categorySlug = req.params.category;
    try {
        const products = await Product.find({ category: categorySlug });
        req.flash('success', '상품들을 불러오는데 성공했습니다.');
        res.render('product', { products })
    } catch (error) {
        req.flash('error', '상품들을 불러오는데 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 상품 페이지 상세보기 렌더링 컨트롤러
async function renderProductDetail(req, res, next) {
    try {
        const product = await Product.findOne({ slug: req.params.product });
        const galleryDir = 'src/public/product-images/' + product._id + '/gallery';
        const galleryImages = await fs.readdir(galleryDir);
        req.flash('success', '상품 상세페이지를 불러오는데 성공했습니다.');
        res.render('product/detail-product', { product, galleryImages})
    } catch (error) {
        req.flash('error', '상품 상세페이지를 불러오는데 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

module.exports = { renderProduct, renderProductAsCategory, renderProductDetail }