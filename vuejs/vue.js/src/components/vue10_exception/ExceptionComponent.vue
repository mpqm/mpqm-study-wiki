<template>
    <button @click="throwError">예외 발생</button>
</template>

<script>

export default {
    methods: {
        throwError() {
            throw new Error("뭔가 문제가 생겼다.");
        }
    },
    name: 'ExceptionComponent',
}
</script>

<style></style>