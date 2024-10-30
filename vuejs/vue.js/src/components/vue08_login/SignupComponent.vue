<template>
      <h2>회원가입</h2>
    <input v-model="member.email" type="email">
    <input v-model="member.password" type="password">
    <button @click="signup">회원가입</button>
</template>

<script>
import { useMemberStore } from '@/store/useMemberStore';
import { mapStores } from 'pinia'

export default {
    name: "SignupComponent",
    computed: { ...mapStores(useMemberStore) },
    data() { return { member: { email: null, password: null } } },
    methods: { signup() { 
        console.log(this.member);
        this.memberStore.signup(this.member); } }
}
</script>
<style>
</style>