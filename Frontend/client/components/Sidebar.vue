<template>
  <div class="w-1/5 flex flex-col bg-white ml-[20px] mr-[20px] shadow-2xl">
    <div>
      <h1 class="font-bold 3xl text-center">Danh mục</h1>
      <ul class="flex flex-col">
        <li
          class="hover:cursor-pointer hover:text-center hover:text-green-500 ml-[20px]"
          v-for="(item, index) in category"
          :key="index"
          @click="changeCategory(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold 3xl text-center">Sách bán chạy</h1>
      <NuxtLink to="/testtoken">Click me</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useCategoryDataStore } from "~/stores/categorydata";
import { watch, ref, onMounted } from "vue";
import axios from "axios";

const category = ref([]);
const { fetchData } = useCategoryDataStore();

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://localhost:7029/san-pham/category"
    );
    category.value = response.data;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error);
  }
});

const changeCategory = async (item) => {
  await fetchData(item);
};
</script>

<style lang="scss" scoped></style>
