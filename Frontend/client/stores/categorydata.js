import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useCategoryDataStore = defineStore("dataStore", () => {
  const router = useRouter();
  const activeItem = ref("");
  const data = ref([]);
  const loading = ref(false);
  const error = ref("");

  const fetchData = async (item) => {
    activeItem.value = item;
    loading.value = true;
    error.value = "";
    router.push({ query: { caterogy: item } });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${item.toLowerCase()}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { data, fetchData, activeItem };
});
