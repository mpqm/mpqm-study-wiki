<template>
    <li> {{ postData.idx }}_{{ postData.title }}</li>
</template>
<script>
export default {
    name: "ItemComponent",
    props: ["postData"]
}

</script>