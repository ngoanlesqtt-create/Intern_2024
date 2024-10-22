<template>
  <div>
    <ul>
      <li v-for="(item, index) in localData" :key="index">
        {{ item.title ? item.title : item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCategoryDataStore } from "~/stores/categorydata";
import { watch, ref } from "vue";
const store = useCategoryDataStore();
const localData = ref([]);
watch(
  () => store.data,
  (newValue) => {
    localData.value = newValue;
    console.log(localData.value);
  }
);

useHead({
  title: "Trang chủ",
  meta: [{ name: "desccription", content: "Trang chủ" }],
});
</script>
