<script setup>
import { RouterLink, RouterView } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <header class="d-flex justify-content-between">
        <div class="d-flex">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50px" height="inherit" />
            <div class="user-info" style="margin-left: 10px">
                <p style="font-size: 13px; color: rgb(125 122 122)">Login Information</p>
                <p style="font-size: 18px">ntteast7346</p>
            </div>
        </div>

        <div class="wrapper d-flex align-items-center">
            <nav>
                <RouterLink to="/">Location list</RouterLink>
                <RouterLink to="/about">Location map</RouterLink>
                <RouterLink to="/test"> Location hidtory</RouterLink>
                <RouterLink to="/attendance-status">Attendance status</RouterLink>
                <RouterLink to="/attendance-history">Atendance history</RouterLink>
                <RouterLink to="/office-history">Office usage history</RouterLink>
            </nav>
        </div>

        <div class="d-flex align-items-center">
            <span style="margin-right: 15px; color: rgb(72 126 223)">
                <i class="pi pi-file-import" style="color: #266cca"></i> Manual
            </span>

            <span style="color: rgb(72 126 223)">
                <i class="pi pi-sign-out" style="color: #266cca"></i>
                Logout
            </span>
        </div>
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
    padding: 10px;
    background-color: #f2f2f2;
}

.user-info>p {
    margin: 0px;
}

span {
    height: fit-content;
}
</style>
