<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/vue06_router/HeaderComponent.vue';



export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
</style>
