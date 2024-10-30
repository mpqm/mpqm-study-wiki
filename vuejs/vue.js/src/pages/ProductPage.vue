<template>
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from '../components/product/HeaderComponent.vue'
import MainComponent from '../components/product/MainComponent.vue'
import FooterComponent from '../components/product/FooterComponent.vue'

export default {
    name: 'ProductPage',
    data() {
        return {
        
        }
    },
    methods: {

    }, 
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent
    },
}
</script>

<style scoped></style>