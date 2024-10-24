<template>
  <div>
    <ul>
      <li v-for="(item, index) in localData" :key="index">
        {{ item.title ? item.title : item.name }}
      </li>
    </ul>
    <button type="button" @click="handleAxios">Fetch data</button>
  </div>
</template>

<script setup>
import { useCategoryDataStore } from "~/stores/categorydata";
import { watch, ref } from "vue";
import axios from "axios";


const store = useCategoryDataStore();
const localData = ref([]);
const apiAxiosData = ref("");

watch(
  () => store.data,
  (newValue) => {
    localData.value = newValue;
  }
);
const handleAxios = async () => {
  try {
    const response= await axios.get("https://localhost:7029/san-pham/full")
    apiAxiosData.value=response.data
    console.log(apiAxiosData.value[0]);
  } catch (e) {
    console.error(e);
  }
};
useHead({
  title: "Trang chủ",
  meta: [{ name: "desccription", content: "Trang chủ" }],
});
</script>
