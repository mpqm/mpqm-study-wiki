<template>
  <p v-for="data in postStore.dataList" :key="data.idx">
    {{ data.idx }}
    {{ data.title }}
  </p>
</template>

<script>
import { usePostStore } from '@/store/usePostStore';
import { mapStores } from 'pinia';

export default {
    name:"PostStatementComponent",
    computed:{...mapStores(usePostStore)},
    mounted() { this.postStore.getPostAll();}
}
</script>

<style>

</style>