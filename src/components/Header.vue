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
                <RouterLink name="home" @click="handleFocus($event)" v-bind:class="{ isFocused: fieldFocus === 'home' }"
                    to="/">Location list
                </RouterLink>
                <RouterLink name="about" @click="handleFocus($event)"
                    v-bind:class="{ isFocused: fieldFocus === 'about' }" to="/about">Location map</RouterLink>
                <RouterLink name="test" @click="handleFocus($event)" v-bind:class="{ isFocused: fieldFocus === 'test' }"
                    to="/test">
                    Location hidtory</RouterLink>
                <RouterLink @click="handleFocus($event)" to="/status">Attendance status</RouterLink>
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
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

// This function will be called once when the component is mounted (page reload)
const firstLoad = () => {
    const path = window.location.pathname; // This will give you "/about"
    const pageName = path.split("/").filter(Boolean)[0]; // "about"
    fieldFocus.value = pageName !== undefined ? pageName : "home";
};

// Call the function inside the `onMounted` lifecycle hook
onMounted(() => {
    firstLoad();
});

// Declare state using ref
const fieldFocus = ref("");
const obj = ref({
    home: false,
    about: false,
});

// Methods to modify state
const handleFocus = (e) => {
    Object.keys(obj.value).forEach((key) => {
        console.log("obj: ", obj.value, "key: ", key);
        obj.value[key] = null;
    });
    obj.value[e.target.name] = true;
    fieldFocus.value = e.target.name;

};
</script>

<style scoped>
nav a {
    font-size: 16px;
    font-weight: 600;
    margin: 0 10px;
    color: #000;
}

nav a:hover {
    color: #006d70;
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
    cursor: pointer;
}

.isFocused {
    position: relative;
    display: inline-block;
    color: #006d70;
}

.isFocused::after {
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
