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
          v-for="(item, index) in authStore.getVisibleMenuItems()"
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
import { useRouter } from "vue-router";
import { isAuthenticated } from "@/composables/useAuth";
const router = useRouter();
const { data } = useFetch("/api/menu");
import { useInputLoginStore } from "~/stores/inputlogin";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const authStore = useAuthStore();
const inputLoginStore = useInputLoginStore();

const { inputs } = inputLoginStore;

const navigateTo = async (path) => {
  if (path === "/logout") {
    const userName = {
      userName: inputs.username, 
    };
    try {
      const response = await axios.post(
        "https://localhost:7029/logout",
        userName,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      authStore.logout()
      router.push("/login")
    } catch (error) {
      console.error(
        "Lỗi:",
        error.response ? error.response.data : error.message
      );
    }
  } else {
    router.push(path);
  }
};
</script>
