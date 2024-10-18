<template>
    <div class="mt-4">
        <label class="w-100 text-end">Total 0 items (displaying 0~0 items)</label>
        <div style="height: 70vh; overflow: auto">
            <table>
                <tr class="">
                    <th class="text-center">NO</th>
                    <th><span>Company Name</span><i class="pi pi-sort"></i></th>
                    <th style="width: 35%">
                        <span>Organization Name</span><i class="pi pi-sort"></i>
                    </th>
                    <th><span>Post</span><i class="pi pi-sort"></i></th>
                    <th><span>Employee Name</span><i class="pi pi-sort"></i></th>
                    <th style="border-right: none">Location</th>
                    <th style="border-left: none; width: 10%">
                        <span></span><i class="pi pi-sort"></i>
                    </th>
                </tr>
                <tr v-if="post" v-for="(item, key) in post" :key="key">
                    <td class="text-center">{{ key + 1 }}</td>
                    <td>{{ item.company_name }}</td>
                    <td>{{ item.organization_name }}</td>
                    <td>{{ item.post }}</td>
                    <td>{{ item.employee_name }}</td>
                    <td>{{ item.location }}</td>
                    <td></td>
                </tr>
            </table>
        </div>
        <label class="w-100 text-end fw-bold" style="font-size: 13px">Actual location and floor may differ depending on
            WIFI signal conditions.</label>
    </div>
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
                const data = await fetch("http://localhost:3000/posts");
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
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

th {
    background-color: #ebf3f5;
    position: relative;
}

i {
    height: fit-content;
    position: absolute;
    right: 8px;
    top: 12px;
}

i.pi-sort {
    color: #000;
}

tr:nth-child(even) {
    /* background-color: #dddddd; */
}
</style>
