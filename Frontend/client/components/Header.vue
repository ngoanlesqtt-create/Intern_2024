<template>
  <div>
    <div
      class="flex justify-evenly bg-[#417505] text-white h-[40px] items-center"
    >
      <ul class="flex w-2/3 justify-evenly">
        <li>19006401</li>
        <li>nhan.ly@vinabook.com</li>
        <li>334 Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh</li>
      </ul>
      <ul class="flex w-1/3 justify-evenly">
        <li
          class="hover:cursor-pointer"
          v-for="(item, index) in data"
          :key="index"
          @click="navigateTo(item.path)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="flex justify-evenly h-[80px] items-center shadow-2xl">
      <h1 class="font-bold 3xl">
        <NuxtLink to="/">NHÀ SÁCH MƠ ƯỚC</NuxtLink>
      </h1>
      <div class="flex">
        <el-input type="text" placeholder="Nhập sách bạn muốn tìm" />
        <el-button type="default">Tìm kiếm</el-button>
      </div>
      <p>Tư vấn bán hàng 19006401</p>
    </div>
  </div>
</template>

<script setup>
import { ElButton, ElInput } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
const { data } = useFetch("/api/menu");
const navigateTo = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped></style>
