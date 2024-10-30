<template>
    <h1>부모 컴포넌트</h1>
    <h1>자식 한테 받은 값: {{ messageFromChild }}</h1>
    <button v-on:click="send()">자식한테 값 전송하기</button>
    <ChildComponent :messageFromParent="messageToChild" @messageToParent="get"/>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
    name: "ParentComponent",
    data() {
        return {
            messageFromChild: "",
            messageToChild: "",
        }
    },
    components: {
        ChildComponent,
    },
    methods: {
        send() {
            this.messageToChild = "messageFromParent"
        },
        get(e){
            this.messageFromChild = e;
        }
    }
}
</script>