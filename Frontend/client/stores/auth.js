import { isAuthenticated } from "@/composables/useAuth";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);

  const menuItems = ref([
    { label: "Đăng nhập", path: "/login", requiresAuth: false },
    { label: "Đăng ký", path: "/register", requiresAuth: false },
    { label: "Đăng xuất", path: "/logout", requiresAuth: true },
  ]);

  const login = () => {
    isLoggedIn.value = true;
  };

  const logout = () => {
    console.log("token", localStorage.getItem("token"));
    localStorage.removeItem("token");
    isLoggedIn.value = false;
  };

  const getVisibleMenuItems = () => {
    return menuItems.value.filter(
      (item) => item.requiresAuth === isLoggedIn.value
    );
  };

  return { isLoggedIn, login, logout, getVisibleMenuItems };
});
