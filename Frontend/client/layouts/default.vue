<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex mt-[50px] mb-[50px]">
      <Sidebar />
      <div class="w-2/3 shadow-2xl">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from "~/components/client/Header.vue";
import Sidebar from "~/components/client/Sidebar.vue";
import Footer from "~/components/client/Footer.vue";
</script>

<style lang="scss" scoped></style>
