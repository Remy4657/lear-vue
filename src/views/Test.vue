<template>
    <div class="post">
        <h1>suhdfushdushdu</h1>
        <!-- Example single danger button -->

        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Check Bootstrap
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <div v-if="loading" class="loading">Loading...</div>

        <div v-if="error" class="error">{{ error }}</div>
        <span>Message: {{ msg }}</span>
        <div v-if="post" class="content">
            <div v-for="item in post" :key="key">
                {{ item.title }}
            </div>
        </div>
        <div v-else>No results found.</div>
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
