<template>
    <!-- <ErrorBoundary> -->
        <ExceptionComponent></ExceptionComponent>
    <!-- </ErrorBoundary> -->
</template>

<script>
import ExceptionComponent from '@/components/vue10_exception/ExceptionComponent.vue';
export default {
    name: "ExceptionPage",
    components: {ExceptionComponent,}
}       
</script>

<style>

</style>