import { defineStore } from "pinia";
import { ref } from "vue";

export const useAdminStore = defineStore("admin", () => {
  const adminData = ref([]);

  const getAdminData = async (path) => {
    try {
      const response = await fetch(`https://localhost:7029${path}`);
      const data = await response.json();
      adminData.value = data;
      console.log("adminData.value:", adminData.value);
    } catch (err) {
      console.log("Lỗi khi lấy adminData:", err.message);
    }
  };

  return { getAdminData, adminData };
});
