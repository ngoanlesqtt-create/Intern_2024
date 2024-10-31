<template>
    <Header />
    <div class="flex">
        <Sidebar />
        <slot />
    </div>
</template>

<script setup>
import Header from "~/components/admin/Header.vue";
import Sidebar from "~/components/admin/Sidebar.vue";

</script>

<style lang="scss" scoped></style>
