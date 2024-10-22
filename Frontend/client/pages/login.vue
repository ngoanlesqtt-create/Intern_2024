<template>
  <div class="flex flex-col items-center shadow-2xl">
    <h1 class="font-bold text-3xl text-center">ĐĂNG NHẬP</h1>
    <div class="flex flex-col items-center h-[150px] justify-around w-1/2">
      <el-input
        class="bg-[#ededed]"
        type="text"
        placeholder="Nhập tên đăng nhập"
      />
      <el-input
        class="bg-[#ededed]"
        type="password"
        placeholder="Nhập mật khẩu"
      />
      <div>
        <el-button>Đăng nhập</el-button>
        <NuxtLink class="ml-[10px]" to="/register">Đăng ký</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from "~/stores/login";

const  {message}  = useLoginStore();
console.log(message);

</script>

<style lang="scss" scoped></style>
