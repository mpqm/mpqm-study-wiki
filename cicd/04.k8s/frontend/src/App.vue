<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="fetchTest">테스트 요청</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "easy-peasy",
    };
  },
  methods: {
    async fetchTest() {
      try {
        const response = await axios.get("http://localhost:8080/api/test");
        this.message = response.data; // 응답 데이터 표시
      } catch (error) {
        console.error("Error fetching data:", error);
        this.message = "요청 실패!";
      }
    },
  },
};
</script>

<style>
button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
