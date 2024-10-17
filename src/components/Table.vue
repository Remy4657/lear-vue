<script setup>
import { ref } from "vue";

const count = ref(0);
const aa = "bb";
const handle = () => {
    alert("me");
};
</script>

<template>
    <div class="mt-4">
        <label class="w-100 text-end">Total 0 items (displaying 0~0 items)</label>
        <table>
            <tr class="">
                <th>NO</th>
                <th><span>Company Name</span><i class="pi pi-sort"></i></th>
                <th><span>Organization Name</span><i class="pi pi-sort"></i></th>
                <th><span>Post</span><i class="pi pi-sort"></i></th>
                <th><span>Employee Name</span><i class="pi pi-sort"></i></th>
                <th style="border-right: none">Location</th>
                <th style="border-left: none"><span></span><i class="pi pi-sort"></i></th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Germany</td>
            </tr>
        </table>
    </div>
</template>
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
