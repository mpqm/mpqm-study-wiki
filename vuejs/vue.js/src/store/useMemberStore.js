import { defineStore } from "pinia";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response && error.response.status === 401){
      console.log("401에러 처리");
    } else if(error.response && error.response.status === 405){
      console.log("405에러 처리");
    }
  }
);

const backend = "http://localhost:8080/api/v1/member";
// 전역 저장소 생성
export const useMemberStore = defineStore("member", {
  state: () => ({ isLoggedIn: false, idx: 0, name: " ", role: " " }),
  persist: { storage: sessionStorage, },
  actions: {
    async login(member) {
      try {
        let response = await axios.post(backend + "/login", member);
        if (response.status === 200) {
          this.isLoggedIn = true;
          console.log(response.data)
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error)
      }
    },
    async signup(member) {
      let response = await axios.post(backend + "/signup", member);
      if (response.status === 200) {
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    },
  },
});
