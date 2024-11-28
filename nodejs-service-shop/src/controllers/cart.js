const Product = require('../models/product');

// 장바구니 페이지 렌더링 컨트롤러
function renderCart(req, res, next) { res.render('cart', { cart: req.session.cart }) }

// 장바구니 추가 컨트롤러
async function addCart(req, res, next) {
    const slug = req.params.productId;
    try {
        const product = await Product.findOne({ slug: slug });
        if (!req.session.cart) {
            req.session.cart = [];
            req.session.cart.push({
                title: slug,
                qty: 1,
                price: product.price,
                image: '/product-images/' + product._id + '/' + product.image
            })
        }
        else {
            let cart = req.session.cart;
            let newItem = true;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].title === slug) {
                    cart[i].qty++;
                    newItem = false;
                    break;
                }
            }
            if (newItem) {
                cart.push({
                    title: slug,
                    qty: 1,
                    price: product.price,
                    image: '/product-images/' + product._id + '/' + product.image
                })
            }
        }
        req.flash('success', '장바구니 추가에 성공했습니다.');
        res.redirect('back');
    } catch (error) {
        req.flash('error', '장바구니 추가에 실패했습니다.');
        res.redirect('back');
    }
}

// 장바구니 수정 컨트롤러
async function updateCart(req, res, next) {
    const slug = req.params.productId;
    const action = req.query.action;
    let cart = req.session.cart;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].title === slug) {
            switch (action) {
                case "add":
                    cart[i].qty++;
                    break;
                case "remove":
                    cart[i].qty--;
                    if (cart[i].qty < 1) { cart.splice(i, 1); }
                    break;
                case "clear":
                    cart.splice(i, 1);
                    if (cart.length === 0) { delete req.session.cart; }
                    break;
                default:
                    console.log('올바른 action을 넣어주세요.');
                    break;
            }
            break;
        }
    }
    req.flash('success', '장바구니가 업데이트되었습니다.');
    res.redirect('back');
}

// 장바구니 초기화 컨트롤러
async function clearCart(req, res, next) {
    delete req.session.cart;
    req.flash('success', '장바구니가 비워졌습니다.');
    res.redirect('back');
}

// 장바구니 결제 및 주문 완료 컨트롤러
async function completeOrder(req, res, next) {
    delete req.session.cart;
    req.flash('success', '주문을 완료했습니다.');
    res.redirect('/cart');
}

module.exports = { renderCart, addCart, updateCart, clearCart, completeOrder }