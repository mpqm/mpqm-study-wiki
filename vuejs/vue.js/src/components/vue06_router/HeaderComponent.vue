<template>
  <!-- URL 창으로 경로를 바꾸면 계속 HTML 파일을 받아옴 -->
   <!-- 라우터 링크를 이용해 이동하면 안받아옴 화면만 바뀜 -->
  <router-link to="grammar">문법</router-link>
  <br>
  <router-link to="community">게시판</router-link>
  <br>
  <router-link to="product">상품 페이지</router-link>
  <!-- SPA 처럼 동작하고 싶으면(받아올꺼면) -->
   <!-- <a href="product">상품페이지</a> -->
  <br>
  <router-link to ="example-router">라우팅 예제</router-link>
  <br>
  <router-link to ="statement">상태관리</router-link>
  <br>
  <router-link to ="member">회원</router-link>
  <br>
  <router-link to ="wysiwyg">게시판 등록</router-link>
  <br>
  <router-link to ="exception">예외 처리</router-link>
  <br>
  <router-link to ="compositionApi">컴포지션 API</router-link>
  <br>
  <router-link to ="validation">검증</router-link>
  <br>
  <router-link to ="test">테스트</router-link>
  <hr>
</template>

<script>
export default {

}
</script>

<style>

</style>