<script setup></script>
<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increment</button>
        <button @click="reset">Reset</button>
        <header>
            <nav>
                <RouterLink @click="increment" to="/status">Attendance status</RouterLink>
            </nav>
        </header>
    </div>
</template>

<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
    setup() {
        // Declare state using ref
        const count = ref(0);

        // Methods to modify state
        const increment = () => {
            count.value += 1; // Re-assigning state
            console.log("count: ", count);
        };

        const reset = () => {
            count.value = 0; // Resetting state
        };

        return {
            count,
            increment,
            reset,
        };
    },
};
</script>
