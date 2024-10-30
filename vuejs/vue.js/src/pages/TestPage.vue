<template>
  <TestComponent msg="Welcome to Your Vue.js App"></TestComponent>
  <LoginComponent></LoginComponent>
</template>

<script>
import TestComponent from '@/components/vue13_test/TestComponent.vue';
import LoginComponent from '@/components/vue13_test/LoginComponent.vue';
export default {
    name: "TestPage",
    components: {TestComponent, LoginComponent}
}
</script>

<style>

</style>