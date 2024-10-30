<template>
    <h1>자식 컴포넌트</h1>
    <h1>부모 한테 받은 값: {{ messageFromParent }}</h1>
    <button @click="$emit('messageToParent', 'messageFromChild')">부모한테 값 전송하기</button>
</template>
<script>
export default {
    name: "ChildComponent",
    emits: ["messageToParent"],
    props: ["messageFromParent"]
}
</script>   