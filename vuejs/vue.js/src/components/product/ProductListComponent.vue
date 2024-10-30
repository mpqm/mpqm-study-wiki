<template>
    <div class="main">
        <h2 class="main-header">여성의류</h2>
        <div class="main-category">
            <ul class="main-category-list">
                <span class="main-category-item"><label class="main-category-item-label" for="categoryMediumList"
                        title="categoryMediumList">전체</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268103100"
                        title="categoryMediumList">상의</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268102100"
                        title="categoryMediumList">아우터</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268105100"
                        title="categoryMediumList">니트웨어</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268106100"
                        title="categoryMediumList">바지</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268104100"
                        title="categoryMediumList">원피스</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268107100"
                        title="categoryMediumList">스커트</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268108100"
                        title="categoryMediumList">액티브웨어</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268110100"
                        title="categoryMediumList">홈웨어</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268117100"
                        title="categoryMediumList">셋업</label></span><span class="main-category-item"><label
                        class="main-category-item-label" for="categoryMediumList268109100"
                        title="categoryMediumList">이너웨어</label></span>
            </ul>
        </div>

        <ul class="product-list">
            <ProductListItemComponent v-for="product in productList" :key="product.idx" :product="product">
            </ProductListItemComponent>

        </ul>
    </div>
</template>

<script>
import ProductListItemComponent from './ProductListItemComponent.vue'

export default {
    name: "ProductListComponent",
    data() {
        return { productList: [{ idx: 1, productName: "상품01", price: 1000 }, { idx: 2, productName: "상품02", price: 2000 }] }
    }, components: {
        ProductListItemComponent,
    },
}

</script>

<style scoped>
.main-contents {
    display: flex;
    min-width: 900px;
    padding: 40px 50px 90px;
}

.aside {
    width: 200px;
    padding-right: 80px;
}

.aside-title {
    width: 200px;
    padding-bottom: 12px;
    border-bottom: 4px solid #000000;
    font-size: 23px;
    font-weight: 800;
    line-height: 1.25;
}

.aside-link {
    display: block;
    width: 100%;
    line-height: 2.13;
    font-size: 16px;
    color: rgb(93, 93, 93);
    text-align: left;
    outline: none;
    font-weight: 200;
}

.aside-link.selected {
    color: rgb(0, 0, 0);
    font-weight: 700;
}

.main {
    flex: 1;
}

.main-header {
    font-size: 34px;
    font-weight: 600;
    line-height: 41px;
    margin-bottom: 36px;
}

.main-category {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid rgb(212, 212, 212);
    background-color: rgb(255, 255, 255);
}

.main-category-list {
    display: flex;
    flex-wrap: wrap;
}

.main-category-item {
    min-height: 20px;
    line-height: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    overflow: visible;
    height: 46px;
}

.main-category-item-input {
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: -10;
    width: 13px;
    height: 13px;
    background: transparent;
}

.main-category-item-label {
    display: inline-block;
    position: relative;
    z-index: 1;
    line-height: 20px;
    cursor: pointer;
    padding-left: 0px;
    margin: 0px 24px;
    color: rgb(0, 0, 0);
}

.product-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 36px;
    counter-reset: list-number;
    grid-gap: 40px 20px;
    min-height: 800px;
}
</style>