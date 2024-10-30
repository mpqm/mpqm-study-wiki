<template>
    <h2>로그인</h2>
    <input v-model="member.email" type="email">
    <input v-model="member.password" type="password">
    <button id="login-btn" @click="login">로그인</button>
    {{ memberStore.isLoggedIn }}
</template>
<script>
import { useMemberStore } from '@/store/useMemberStore';
import { mapStores } from 'pinia'

export default {
    name: 'LoginComponent',
    computed: { ...mapStores(useMemberStore) },
    data() { return { member: { email: null, password: null } } },
    methods: { login() {  this.memberStore.login(this.member); } }
}
</script>