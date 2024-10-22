<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex h-full mt-[50px]">
      <Sidebar />
      <div class="w-2/3 shadow-2xl">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style lang="scss" scoped></style>
