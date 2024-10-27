<template>
  <div class="container mx-auto p-4">
    <div v-if="products.length === 0" class="text-center text-gray-500">
      Loading...
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
      >
        <img
          :src="product.thumbnails[0]"
          alt="Hình ảnh sản phẩm"
          class="w-full h-auto mb-2 rounded"
        />
        <strong class="text-lg block mb-1">{{ product.name }}</strong>
        <span class="text-gray-700 text-center"
          >Giá: {{ product.price }} VNĐ</span
        >
      </div>
    </div>
  </div>
</template>
<!-- <ul>
  <li v-for="(item, index) in localData" :key="index">
    {{ item.title ? item.title : item.name }}
  </li>
</ul> -->

<script setup>
import { useCategoryDataStore } from "~/stores/categorydata";
import { watch, ref, onMounted } from "vue";
import axios from "axios";

const store = useCategoryDataStore();
const localData = ref([]);
const page = ref(1);
const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("https://localhost:7029/san-pham/full");
    products.value = response.data; // Gán dữ liệu vào biến products
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error);
  }
});

watch(
  () => products.value,
  (newValue) => {
    console.log(newValue[0].thumbnails[0]);
  }
);

watch(
  () => store.data,
  (newValue) => {
    localData.value = newValue;
  }
);

definePageMeta({
  middleware: ["auth"],
});

useHead({
  title: "Trang chủ",
  meta: [{ name: "desccription", content: "Trang chủ" }],
});
</script>
