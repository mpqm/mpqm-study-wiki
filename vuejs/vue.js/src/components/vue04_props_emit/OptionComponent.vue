<template>
    <option 
    :value="option.price" 
    @select="$emit('selectionChanged', option.price)">
    {{ option.menu }} / {{ option.price }}
    </option>
</template>

<script>
export default {
    name: 'OptionComponent',
    props: ["option"],
    emits: ["selectionChanged"],
    data() {
        return {
            
        }
    },
    methods: {
    }, 
    components: {
    },
}
</script>

<style>

</style>