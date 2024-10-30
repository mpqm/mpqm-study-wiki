<template>
    <TemplateGrammarComponent></TemplateGrammarComponent>
    <hr>
    <ImportExParentComponent></ImportExParentComponent>
    <hr>
    <ParentComponent></ParentComponent>
    <hr>
    <ListComponent></ListComponent>
  </template>
  
<script>
import TemplateGrammarComponent from '@/components/vue02_template_grammar/TemplateGrammarComponent.vue';
import ImportExParentComponent from '@/components/vue03_component/ImportExParentComponent.vue';
import ParentComponent from '@/components/vue04_props_emit/ParentComponent.vue';
import ListComponent from '@/components/vue05_axios/ListComponent.vue';
export default {
    name: 'GrammarPage',
    data() {
        return {
        }
    },
    components: {
        TemplateGrammarComponent,
        ImportExParentComponent,
        ParentComponent,
        ListComponent,
    },
    methods: {
    }
}
</script>

<style scoped></style>