const Category = require('../models/category');

// 모든 카테고리를 가져옴
async function getAllCategories(req, res, next) {
    try {
        const categories = await Category.find();
        res.locals.categories = categories;
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = { getAllCategories }