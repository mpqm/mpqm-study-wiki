const ResizeImg = require('resize-img');
const Category = require('../models/category');
const Product = require('../models/product');
const fs = require('fs-extra');

// 어드민 상품 관리 페이지 렌더링 컨트롤러
async function renderAdminProducts(req, res, next) {
    try {
        const products = await Product.find();
        req.flash('success', '관리자 상품 목록 페이지를 불러 왔습니다.')
        res.render('admin/products', { products })
    } catch (error) {
        req.flash('error', '관리자 상품 목록 페이지를 불러올 수 없습니다.');
        res.redirect('back');
        next(error);
    }
}
// 어드민 상품 추가 페이지 렌더링 컨트롤러
async function renderAddProduct(req, res, next) {
    try {
        const categories = await Category.find();
        req.flash('success', '관리자 상품 추가 페이지를 불러 왔습니다.')
        res.render('admin/add-product', { categories })
    } catch (error) {
        req.flash('error', '관리자 상품 추가 페이지를 불러올 수 없습니다.');
        res.redirect('back');
        next(error);
    }
}

// 상품 추가 컨트롤러
async function addProduct(req, res, next) {
    const imageFile = req.files.image.name;
    const { title, desc, price, category } = req.body;
    const slug = title.replace(/\s+/g, '-').toLowerCase();
    try {
        const newProduct = new Product({ title, desc, price, slug, category, image: imageFile })
        await newProduct.save();
        await fs.mkdirp('src/public/product-images/' + newProduct._id);
        await fs.mkdirp('src/public/product-images/' + newProduct._id + '/gallery');
        await fs.mkdirp('src/public/product-images/' + newProduct._id + '/gallery/thumbs');
        const productImage = req.files.image;
        const path = 'src/public/product-images/' + newProduct._id + '/' + imageFile;
        await productImage.mv(path);
        req.flash('success', '상품 추가에 성공했습니다.');
        res.redirect('/admin/product');
    } catch (error) {
        req.flash('error', '상품 추가에 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 상품 삭제 컨트롤러
async function deleteProduct(req, res, next) {
    const id = req.params.id;
    const path = 'src/public/product-images/' + id;
    try {
        await fs.remove(path);
        await Product.findByIdAndRemove(id);
        req.flash('success', '상품 삭제를 성공했습니다.');
        res.redirect('back');
    } catch (error) {
        req.flash('error', '상품 삭제를 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}


// 어드민 상품 수정 페이지 렌더링 컨트롤러
async function renderEditProduct(req, res, next) {
    try {
        const categories = await Category.find();
        const { _id, title, desc, category, price, image } = await Product.findById(req.params.id);
        const galleryDir = 'src/public/product-images/' + _id + '/gallery';
        const galleryImages = await fs.readdir(galleryDir);
        req.flash('success', '상품 수정 페이지를 불러왔습니다.');
        res.render('admin/edit-product', {
            title, desc, categories,
            category: category.replace(/\s+/g, '-').toLowerCase(),
            price, image, galleryImages,
            id: _id
        })
    } catch (error) {
        req.flash('error', '상품 수정 페이지를 불러오는데 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 상품 수정 컨트롤러
async function editProduct(req, res, next) {
    let imageFile = req.files ? req.files.image.name : null;
    console.log(imageFile)
    const { title, desc, price, category } = req.body;
    const slug = title.replace(/\s+/g, '-').toLowerCase();
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { title, desc, price, slug, category, image: imageFile });
        if (imageFile !== null){
            const productImage = req.files.image;
            const path = 'src/public/product-images/' + product._id + '/' + imageFile;
            await productImage.mv(path);
        }
        req.flash('success', '상품 수정에 성공했습니다.');
        res.redirect('/admin/product');
    } catch (error) {
        req.flash('error', '상품 수정에 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 세부 이미지 드랍존 추가 컨트롤러
async function addProductGallery(req, res, next) {
    const productImage = req.files.file;
    const id = req.params.id;
    const path = 'src/public/product-images/' + id + '/gallery/' + req.files.file.name;
    const thumbsPath = 'src/public/product-images/' + id + '/gallery/thumbs/' + req.files.file.name;

    try {
        await productImage.mv(path);
        const buf = await ResizeImg(fs.readFileSync(path), { width: 100, height: 100 });
        fs.writeFileSync(thumbsPath, buf);
        res.sendStatus(200);
    } catch (error) {
        req.flash('error', '상품 갤러리 사진 추가를 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 세부 이미지 드랍존 삭제 컨트롤러
async function deleteProductGallery(req, res, next) {
    const originalImage = 'src/public/product-images/' + req.params.id + '/gallery/' + req.params.imageId;
    const thumbImage = 'src/public/product-images/' + req.params.id + '/gallery/thumbs/' + req.params.imageId;
    try {
        await fs.remove(originalImage);
        await fs.remove(thumbImage);
        req.flash('success', '상품 갤러리 사진 삭제를 성공했습니다.');
        res.redirect('/admin/product/edit/' + req.params.id);
    } catch (error) {
        req.flash('error', '상품 갤러리 사진 삭제를 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 어드민 카테고리 관리 페이지 렌더링 컨트롤러
async function renderAdminCategories(req, res, next) {
    try {
        const categories = await Category.find({});
        req.flash('success', '관리자 카테고리 목록 페이지를 불러왔습니다.');
        res.render('admin/categories', { categories: categories })
    } catch (error) {
        req.flash('success', '관리자 카테고리 목록 페이지를 불러오는데 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

// 어드민 카테고리 추가 페이지 렌더링 컨트롤러
function renderAddCategories(req, res, next) { res.render('admin/add-category'); }


// 카테고리 추가 컨트롤러
async function addCategory(req, res, next) {
    try {
        const title = req.body.title;
        const slug = title.replace(/\s+/g, '-').toLowerCase();
        const category = await Category.findOne({ slug: slug });
        const newCategory = new Category({ title, slug })
        await newCategory.save();
        req.flash('success', '카테고리가 추가되었습니다.');
        res.redirect('/admin/category');
    } catch (error) {
        req.flash('error', '카테고리 제목이 존재합니다. 다른 제목을 사용해주세요.');
        res.render('back');
        next(error);
    }
}

// 카테고리 삭제 컨트롤러
async function deleteCategory(req, res, next) {
    try {
        await Category.findByIdAndRemove(req.params.id);
        req.flash('success', '카테고리가 삭제되었습니다.');
        res.redirect('/admin/category');
    } catch (error) {
        req.flash('error', '카테고리 삭제를 실패했습니다.');
        res.redirect('back');
        next(error);
    }
}

module.exports = {
    renderAdminProducts, renderAddProduct, addProduct, deleteProduct, renderEditProduct, editProduct, addProductGallery, deleteProductGallery,
    renderAdminCategories, renderAddCategories, addCategory, deleteCategory
}