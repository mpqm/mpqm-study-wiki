<template>
  <!-- 보간법 -->
  <h1> {{bogan}} </h1>

  <!-- 단방향 데이터 바인딩 디렉티브 -->
  <h1 v-text="vvtext"> </h1><!-- v-text는 코드를 글자로 출력--> 
  <div v-html="vvhtml"></div><!-- v-html은 코드를 코드로 출력-->
  <input v-bind:value="vvbind1" name="">  <!-- v-bind -->
  <input :value="vvbind1" name=""><br>
  <img v-bind:src="vvbind2" /><br>
  
  <!-- 양방향 데이터 바인딩 디렉티브 -->
  <input v-model="vvmodel" name="vvmodel">

  <!-- 조건 렌더링 디렉티브 -->
  <h1 v-if="num < 100">100보다 작을때</h1> 
  <h1 v-else-if="num == 100">100일때</h1> 
  <h1 v-else>100보다 클때</h1> 
  <h1 v-show="num < 100"> 조건에따라 보이는 태그 </h1>
  
  <!-- 반복 렌더링 디렉티브-->
  <ul>
    <li v-for="menu in menus" :key="menu.num">
      {{menu.menu}}
    </li>
  </ul>

  <!-- 텍스트 출력 - v-show, v-text-->
  <div>예금액: <input v-model="amount"></div>
  <div v-show="amount < 100">
    <p>{{'100보다 작음' +  amount}}</p>
    <p>100보다 작음 {{amount}}</p>
    <p v-text="'100보다 작음'+amount"></p>
  </div>

  <!-- 이벤트 핸들링 -->
  <div>
    ID: <input v-model="id"><br>
    PW: <input v-model="pw">
    <button v-on:click="func01()"> 로그인 </button>
    <p v-text="'입력한 ID는 ' + id + '입력한 PW는' + pw"></p>
  </div>
</template>

<script>
export default {
  name: 'TemplateGrammarComponent',
  data() {
    return {
      bogan:"bogan",
      vvtext:"vvtext",
      vvhtml:"<h3>vvhtml</h3>",
      vvbind1:"vvbind1",
      vvbind2:"data:image/png;base64,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",
      vvmodel: "vvmodel",
      num: 10,
      menus: [{ num: 1, menu: "사과" }, { num: 2, menu: "바나나" }, { num: 3, menu: "딸기" }],
      amount:1,
      id: " ",
      pw: " ",
    }
  },
  methods:{
    func01(){
      // this 사용법
      console.log("입력한 ID는"+ this.id+ "이고, 입력한 PW는 "+ this.pw + "입니다.");
      console.log("입력한 ID는 ${this.id} 이고, 입력한 PW는 ${this.pw} 입니다.");
    },
  },
}
</script>
<style>

</style>
