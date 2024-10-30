<template>
    <h1> 리스트 컴포넌트 </h1>
    <h1 ref="hTag"></h1>
    <div v-if="isLoading"> 로딩 중</div>
    <ul>
        <ItemComponent v-for="(data, index) in dataList" :key="index" :postData="data"></ItemComponent>
    </ul>
    <!-- <button @click="getData">데이터 가져오기</button> -->
</template>
<script>
import ItemComponent from "./ItemComponent.vue";
import axios from "axios";

export default {
    name: "ListComponent",
    components: {
        ItemComponent
    },
    data() {
        return { 
            dataList: [],
            isLoading: true, 
        }
    },
    // 페이지가 뜰때 값 가져오기, 버튼 말고
    created() {
        // created는 페이지가 생성될때 실행되므로 인식 안됨, 즉 created는 DOM에 접근 못함
        this.getData()
        console.log(this.$refs.hTag)
        console.log("created 실행");
    },
    mounted() {
        // 마운트는 페이지가 다만들어지고 실행되므로 인식됨, DOM 접근 가능하나 created보다 느림
        // this.getData()
        console.log(this.$refs.htag) 
        console.log("mounted 실행");
    },
    // axios로 값 가져오기
    methods: {
        async getData() {
            try {
                const response = await axios.get("http://localhost:8080/post/search-all");
                this.dataList = response.data;
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        }
    }
}

</script>