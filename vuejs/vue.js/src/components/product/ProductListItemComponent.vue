<template>
    <li class="product-list-item">
        <div class="product-list-item-wrapper">
            <a href="/detail.html">
                <div class="product-image-wrapper">
                    <img src="https://img.29cm.co.kr/item/202310/11ee62764f2aec1da5b337e05227e995.jpg?width=400"
                        alt="[유리하다PICK] GRACIELA premium wool handmade coat_charcoal" />
                </div>
            </a>
            <div class="product-info-wrapper">
                <a href="/detail.html" class="product-info-link">{{ product.productName }}</a><a href="/detail.html">
                    <div>
                        <h5 class="product-name">
                            [유리하다PICK] GRACIELA premium wool handmade
                            coat_charcoal
                        </h5>
                        <div class="product-sale-price-wrapper">
                            <strong class="product-sale-price">{{ product.price }}</strong>
                            <div class="product-price-wrapper">
                                <span class="product-sale">24%</span><strong class="product-price">355,680</strong>
                            </div>
                        </div>
                        <ul class="product-card">
                            <li color="#1d1d1d" class="product-card-item">쿠폰</li>
                        </ul>
                    </div>
                </a>
                <div class="product-bottom-wrapper">
                    <button class="product-like">
                        <i class="fa-regular fa-heart"></i> 2,463
                    </button>
                    <a href="https://product.29cm.co.kr/catalog/2270129#review" class="product-review">
                        <span class="review">
                            <i class="fa-regular fa-comment"></i>48
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ProductItemComponent',
    props: ["product"],
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style scoped></style>