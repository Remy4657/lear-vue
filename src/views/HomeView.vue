<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navigation from "@/components/Navigation.vue";
import Table from "@/components/Table.vue";
import { onMounted } from "vue";

</script>

<template>
  <main class="d-flex flex-row">
    <Sidebar />
    <div class="d-flex flex-column" style="padding: 20px 30px; width: 100%">
      <Navigation />
      <Table />
    </div>
  </main>
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
