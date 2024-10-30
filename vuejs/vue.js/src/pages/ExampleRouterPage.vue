<template>
    <ul>
    <router-link to="/one/1">
      <li>1번 상품</li>
    </router-link>
    <router-link to="/one/2">
      <li>2번 상품</li>
    </router-link>
    <router-link to="/two">
      <li>그냥 2페이지</li>
    </router-link>
    <router-link to="/two/sub1">
      <li>2페이지 안에 sub1</li>
    </router-link>
    <router-link to="/two/sub2">
      <li>2페이지 안에 sub2</li> </router-link>
  </ul>
</template>

<script>
export default {
  name: "ExampleRouterPage",
}
</script>
<style>
</style>