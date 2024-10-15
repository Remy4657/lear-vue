<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="d-flex justify-content-between">
        <div>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
        </div>

        <div class="wrapper">
            <nav>
                <RouterLink to="/">Location list</RouterLink>
                <RouterLink to="/about">Location map</RouterLink>
                <RouterLink to="/test"> Location hidtory</RouterLink>
                <RouterLink to="/attendance-status">Attendance status</RouterLink>
                <RouterLink to="/attendance-history">Atendance history</RouterLink>
                <RouterLink to="/office-history">Office usage history</RouterLink>
            </nav>
        </div>
        <div>Logout</div>
    </header>

    <!-- <RouterView /> -->
</template>
<style scoped>
nav a {
    font-size: 17px;
    font-weight: 600;
    margin: 0 10px;
    color: #000;
}

header {
    padding: 15px 10px;
    background-color: #e5e4e4;
}
</style>
