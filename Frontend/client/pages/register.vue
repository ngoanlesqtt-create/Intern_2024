<template>
  <div class="flex flex-col items-center shadow-2xl h-[300px]">
    <h1 class="font-bold text-3xl text-center">ĐĂNG KÝ</h1>
    <el-form
      class="flex flex-col items-center h-[250px] justify-around w-1/2"
      @submit.prevent="onSubmit"
    >
      <Username />
      <Password />
      <Email />
      <PhoneNumber />
      <el-button type="primary" native-type="submit"> Đăng ký</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import Username from "~/components/Inputs/Username";
import Password from "~/components/Inputs/Password";
import Email from "~/components/Inputs/Email";
import PhoneNumber from "~/components/Inputs/PhoneNumber";
import axios from "axios";
import { useRouter } from "vue-router";
import { ElForm, ElButton } from "element-plus";
import { useInputStore } from "~/stores/inputs";

const router = useRouter();
const { v$ } = useInputStore();

const onSubmit = async () => {
  v$.$touch();
  if (v$.$invalid) console.log("Hello");
 
};
</script>

<style scoped></style>
