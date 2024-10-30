<template>
  <SignupComponent></SignupComponent>
  <LoginComponent></LoginComponent>
</template>

<script>
import LoginComponent from '@/components/vue08_login/LoginComponent.vue';
import SignupComponent from '@/components/vue08_login/SignupComponent.vue';
export default {
    name: "LoginPage",
    components: {
      LoginComponent, 
      SignupComponent
    }
}
</script>

<style>

</style>