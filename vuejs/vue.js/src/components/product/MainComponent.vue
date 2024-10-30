<template>
    <div class="main-contents">
        <AsideComponent></AsideComponent>
        <ProductListComponent></ProductListComponent>
    </div>
</template>

<script>
import AsideComponent from './AsideComponent.vue'
import ProductListComponent from './ProductListComponent.vue'

export default {
    name: "MainComponent",
    data() {
        return { message: "test" }
    }, components: {
        AsideComponent,
        ProductListComponent,
    },
}

</script>

<style scoped>
.main-contents {
    display: flex;
    min-width: 900px;
    padding: 40px 50px 90px;
}
</style>