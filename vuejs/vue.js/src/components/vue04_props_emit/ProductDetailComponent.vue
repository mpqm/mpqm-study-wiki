<template>
    <!-- <span> {{ dataList.product }}</span><br> -->
    <span> {{ product.name }}</span>
    <br>
    <span> {{ product.price }}</span>
    <br>
  <select @change="updateTotalPrice">
    <option disabled selected>메뉴를 선택하세요</option>
    <OptionComponent v-for="(option, index) in product.options" :key="index" :option="option"></OptionComponent>
  </select>
    <span>전체가격: {{ totalPrice }}</span>
</template>

<script>
import OptionComponent from './OptionComponent.vue';
import axios from "axios";

export default {
    name: 'ProductDetailComponent',
    created() {
        this.getData()
    },
    data() {
        return {
            product: {},
            totalPrice: 0
        }
    },
    methods: {
        async getData() {
                const response = await axios.get("https://run.mocky.io/v3/1d74fc62-6e14-4450-aec1-beffcdc98453");
                console.log(response.data.result);
                this.product = response.data.product;
                this.totalPrice = this.product.price;
        },
        updateTotalPrice(event) {
            console.log(event.target.value);
            this.totalPrice += Number(event.target.value);
        }
    },
    components: {
        OptionComponent,
    },
}
</script>

<style>

</style>