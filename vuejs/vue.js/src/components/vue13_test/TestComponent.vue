<template>
    <div>
      X : <input type="text" v-model.number="x.a" /><br />
      Y : <input type="text" v-model.number="y" /><br />
      <button @click="plus">더하기</button>
      {{ props.msg }}
    </div>
  </template>
  <script setup>
  import { onMounted, ref, defineProps } from 'vue';
  const x = ref({ a: 10, b: "글자" });
  const y = ref(0);
  
  const plus = () => {
    y.value++;
  };
  
  onMounted(() => {
    console.log(`컴포넌트가 마운트 됐습니다.`)
  })
  
  const props = defineProps(['msg'])
  
  </script>