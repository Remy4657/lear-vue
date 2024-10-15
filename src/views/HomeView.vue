<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";

const count = ref(0);
const aa = "bb";
const handle = () => {
  alert("me");
};
</script>

<template>
  <main>
    <div v-bind:id="aa" :class="aa" @click="handle">test</div>
    <!-- <TheWelcome /> -->
    <button @click="count++">You clicked me {{ count }} times.</button>
  </main>
</template>
