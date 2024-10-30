<template>
  ImportExParentComponent
  <ImportExChildComponent></ImportExChildComponent>
  <ImportExChildComponent></ImportExChildComponent>
  <ImportExChildComponent></ImportExChildComponent>
</template>

<script>
import ImportExChildComponent from './ImportExChildComponent.vue';


export default {
    name:"ImportExParentComponent",
    components: {ImportExChildComponent}
}
</script>

<style>

</style>