<template>
  <div class="flex flex-col items-center shadow-2xl  h-[300px]">
    <h1 class="font-bold text-3xl text-center">ĐĂNG KÝ</h1>
    <div class="flex flex-col items-center h-[250px] justify-around w-1/2">
      <el-input
        class="bg-[#ededed] w-1/2"
        type="text"
        placeholder="Nhập tên đăng nhập"
        v-model="userName"
      />
      <el-input
        class="bg-[#ededed] w-1/2"
        type="password"
        placeholder="Nhập mật khẩu"
      />
      <el-input
        class="bg-[#ededed] w-1/2"
        type="text"
        placeholder="Nhập mật email"
      />
      <el-input
        class="bg-[#ededed] w-1/2"
        type="number"
        placeholder="Nhập số điện thoại"
      />
      <el-input
        class="bg-[#ededed] w-1/2"
        type="text"
        placeholder="Nhập mật địa chỉ"
      />
      <div>
        <el-button>Đăng ký</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userName=ref('')
</script>

<style scoped></style>
