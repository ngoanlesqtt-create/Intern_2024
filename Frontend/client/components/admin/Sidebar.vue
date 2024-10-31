<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="2" v-for="item in data" :key="item.id">
        <el-icon><icon-menu /></el-icon>
        <span @click="navigate(item.path)">{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useAdminStore } from "~/stores/admin";
import { useRouter } from "vue-router";

const adminStore = useAdminStore();
const { getAdminData } = adminStore;
const { data } = await useFetch("/api/menu");
const router = useRouter();

const navigate = (path) => {
  router.push(`/admin${path}`);
  getAdminData(path);
};

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped></style>
