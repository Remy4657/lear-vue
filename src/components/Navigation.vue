<script setup>
import { ref } from "vue";

const count = ref(0);
const aa = "bb";
const handle = () => {
    alert("me");
};
</script>

<template>
    <div>
        <a>main office</a> <span>></span> <a>main office</a> <span>></span>
        <a>main office</a> <span>></span> <a>main office</a><span>></span> <a>main office</a>
        <span>></span> <a>main office</a>
    </div>
</template>
<style scoped>
a {
    text-decoration: underline !important;
    color: blue !important;
    cursor: pointer;
}
</style>
