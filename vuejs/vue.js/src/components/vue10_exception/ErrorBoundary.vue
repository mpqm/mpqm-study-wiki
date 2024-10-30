<template>
    <div>
        <slot v-if="!error"></slot>
        <div v-else>
            <h1>예외 발생</h1>
            <p>{{ error.message }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return { error: null }
    },
    errorCaptured(err, vm, info) {
        this.error = err;
        console.log(err);
        console.log(vm);
        console.log(info);

        return false;
    },
    name: 'ErrorBoundary',
}
</script>

<style></style>