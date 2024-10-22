<template>
  <div class="w-1/5 flex flex-col bg-white ml-[20px] mr-[20px] shadow-2xl">
    <div>
      <h1 class="font-bold 3xl text-center">Danh mục</h1>
      <ul class="flex flex-col">
        <li
          class="hover:cursor-pointer hover:text-center hover:text-green-500 ml-[20px]"
          v-for="(item, index) in category"
          :key="index"
          @click="changeCategory(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold 3xl text-center">Sách bán chạy</h1>
    </div>
  </div>
</template>

<script setup>
import { useCategoryStore } from "~/stores/category";
import { useCategoryDataStore } from "~/stores/categorydata";
import { watch, ref, onMounted } from "vue";

const { category } = useCategoryStore();
const { fetchData, activeItem, data } = useCategoryDataStore();

const changeCategory = async (item) => {
  await fetchData(item);
};
</script>

<style lang="scss" scoped></style>
