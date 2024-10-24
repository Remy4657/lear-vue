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
            <label style="font-size: 20px" class="fw-light">Search Criteria</label>
            <label>You must specify one or more search creteria.</label>
        </div>
        <div class="pd-10px">
            <h5>Office</h5>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Office</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Floor</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>

        <div class="pd-10px">
            <h5>Company</h5>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Company</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>
        <div class="pd-10px">
            <h5>Organizational Hierarchy</h5>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">No. 1</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Second</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Third</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Fourth</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Fifth</label>
                <select name="cars" id="cars">
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">6th</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                </select>
            </div>
        </div>
        <div class="pd-10px">
            <h5>Location</h5>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Location</label>
                <select v-model="selected" name="cars" id="cars" style="height: 25px; padding: 15px 0">
                    <option value="" disabled></option>
                    <option v-if="post" v-for="item in post" :key="key" v-bind:value="{ value: item.title }">
                        {{ item.title }}
                    </option>
                </select>
            </div>
        </div>
        <div class="pd-10px">
            <h5>Employee</h5>
            <div class="d-flex justify-content-between mt-13px align-items-center">
                <label class="pd-left-5px">Employee name</label>
                <input type="text" />
            </div>
        </div>
        <div class="pd-10px d-flex justify-content-end" style="padding-top: 46px">
            <button class="btn btn-clear me-3 fw-bold">Clear</button>
            <button class="btn fw-bold" style="background-color: #0098a3; color: #fff">
                Search
            </button>
        </div>
    </div>
    <!-- <div v-bind:id="aa" :class="aa" @click="handle">test</div>
    <button @click="count++">You clicked me {{ count }} times.</button> -->
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            post: null,
            error: null,
        };
    },
    created() {
        // watch the params of the route to fetch the data again
        this.$watch(
            () => this.$route.params.id,
            this.fetchData,
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        );
        //this.fetchData;
    },
    methods: {
        async fetchData() {
            this.error = this.post = null;
            this.loading = true;

            try {
                // replace `getPost` with your data fetching util / API wrapper
                const data = await fetch("https://api.sampleapis.com/coffee/hot");
                this.post = await data.json();
                console.log("this post: ", this.post);
            } catch (err) {
                this.error = err.toString();
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
h5,
h5,
label {
    color: #fff;
}

label {
    font-size: 14px;
}

h5 {
    font-size: 14px;
    margin-bottom: 0;
}

h5 {
    display: flex;
    align-items: center;
}

h5::before {
    content: "-";
    margin-right: 5px;
}

h5::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: #fff;
    /* Màu của dấu gạch ngang */
    margin-left: 10px;
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
    padding: 4px;
}

input {
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 4px 5px;
}

.btn {
    padding: 3px 12px;
}

.btn-clear {
    color: #fff;
    border-radius: 3px;
    border: 1px solid #ccc;
}
</style>
