<script setup>
import { RouterLink } from "vue-router";

const handleFocus = (e) => {
    console.log("e: ", e.target.name);
};
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
                <RouterLink name="home" @click="handleFocus($event)" class="is-focused" to="/">Location list
                </RouterLink>
                <RouterLink name="about" @click="handleFocus($event)" to="/about">Location map</RouterLink>
                <RouterLink name="test" @click="handleFocus($event)" to="/test">
                    Location hidtory</RouterLink>
                <RouterLink @click="handleFocus($event)" to="/attendance-status">Attendance status</RouterLink>
                <RouterLink @click="handleFocus($event)" to="/attendance-history">Atendance history</RouterLink>
                <RouterLink @click="handleFocus($event)" to="/office-history">Office usage history</RouterLink>
            </nav>
        </div>

        <div class="d-flex align-items-center">
            <span style="margin-right: 20px; color: rgb(72 126 223)">
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
    font-size: 16px;
    font-weight: 600;
    margin: 0 10px;
    color: #000;
}

nav a:hover {
    color: var(-)
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

.is-focused {
    position: relative;
    display: inline-block;
    color: #006d70;
}

.is-focused::after {
    content: "";
    display: block;
    width: 30px;
    /* Độ dài của gạch dưới */
    height: 4px;
    /* Độ dày của gạch dưới */
    background-color: #006d70;
    /* Màu của gạch dưới */
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    /* Khoảng cách giữa chữ và gạch dưới */
    border-radius: 10px;
    /* Tạo bo góc cho gạch */
}
</style>
