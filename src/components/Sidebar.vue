<script setup>
import { ref } from "vue";

const count = ref(0);
const aa = "bb";
const handle = () => {
    alert("me");
};
</script>

<template>

    <div class="sidebar" style="max-width: 345px">
        <div class="d-flex sidebar-header">
            <label style="font-size: 15px">Search Criteria</label>
            <label>You must specify one or more search creteria.</label>
        </div>
        <div class="pd-10px">
            <h6>Office</h6>
            <div class="d-flex justify-content-between">
                <label class="pd-left-5px">Office</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Floor</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>

        <div class="pd-10px">
            <h6>Company</h6>
            <div class="d-flex justify-content-between">
                <label class="pd-left-5px">Company</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>
        <div class="pd-10px">
            <h6>Organizational Hierarchy</h6>
            <div class="d-flex justify-content-between">
                <label class="pd-left-5px">No. 1</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Second</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Third</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Fourth</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Fifth</label>
                <select name="cars" id="cars">
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">6th</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>
        <div class="pd-10px">
            <h6>Location</h6>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Location</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>
        <div class="pd-10px">
            <h6>Employee</h6>
            <div class="d-flex justify-content-between mt-13px">
                <label class="pd-left-5px">Employee name</label>
                <select name="cars" id="cars" style="height: 25px">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>
        <div class="pd-10px d-flex justify-content-end">
            <button class="btn btn-clear me-3 fw-bold">Clear</button>
            <button class="btn fw-bold" style="background-color: #0098a3; color: #fff">
                Search
            </button>
        </div>
    </div>
    <!-- <div v-bind:id="aa" :class="aa" @click="handle">test</div>
    <button @click="count++">You clicked me {{ count }} times.</button> -->

</template>
<style scoped>
h5,
h6,
label {
    color: #fff;
}

label {
    font-size: 13px;
}

main {
    padding: 0 10px;
}

.sidebar {
    background-color: #006973;
}

.sidebar-header {
    padding: 20px 20px 0px 20px;
}

select {
    width: 225px;
    border-radius: 4px;
}

.btn-clear {
    color: #fff;
    border-radius: 3px;
    border: 1px solid #ccc;
}
</style>
