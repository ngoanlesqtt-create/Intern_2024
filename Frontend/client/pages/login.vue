<template>
  <div class="flex flex-col items-center shadow-2xl">
    <h1 class="font-bold text-3xl text-center">ĐĂNG NHẬP</h1>
    <el-form
      @submit.prevent="onSubmit"
      class="flex flex-col items-center h-[160px] justify-around w-1/2"
    >
      <Username />
      <Password />
      <el-button type="primary" native-type="submit">Đăng nhập</el-button>
    </el-form>
  </div>
</template>
<script setup>
import Username from "~/components/inputs/inputlogin/Username.vue";
import Password from "~/components/inputs/inputlogin/Password.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { ElForm, ElButton } from "element-plus";
import { useInputLoginStore } from "~/stores/inputlogin";
import { useAuthStore } from "~/stores/auth";

const router = useRouter();
const { inputs, v$ } = useInputLoginStore();
const { login } = useAuthStore();

const onSubmit = async () => {
  v$.$touch();
  const isValid = await v$.$validate();

  if (isValid) {
    const payload = {
      username: inputs.username,
      password: inputs.password,
    };
    try {
      const response = await axios.post(
        "https://localhost:7029/login",
        payload
      );
      const result = await response.data;
      localStorage.setItem("token", result.token);
      localStorage.setItem("refreshToken", result.refreshToken);
      login();
      router.push("/");
    } catch (e) {
      alert(e.response.data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
