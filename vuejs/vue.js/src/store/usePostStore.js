import { defineStore } from "pinia";
import axios from "axios";

// 전역 저장소 생성
export const usePostStore = defineStore("post", {
  state: () => ({
    dataList: [], // 초기값을 빈 배열로 설정
  }),
  actions: {
    async getPostAll() {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/post/search-all");
        this.dataList = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
});

