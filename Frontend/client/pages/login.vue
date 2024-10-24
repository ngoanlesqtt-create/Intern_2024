<template>
  <div class="flex flex-col items-center shadow-2xl">
    <h1 class="font-bold text-3xl text-center">ĐĂNG NHẬP</h1>
    <Form
      @submit="onSubmit"
      class="flex flex-col items-center h-[150px] justify-around w-1/2"
    >
      <Username />
      <Password />
      <button>Đăng nhập</button>
    </Form>
  </div>
</template>

<script setup>
import { Form } from "vee-validate";
import Username from "~/components/Inputs/Username";
import Password from "~/components/Inputs/Password";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const onSubmit = async (values) => {
  const respone = await axios.post("https://localhost:7029/login", {
    username: values.username,
    password: values.password,
  });
  console.log(respone);
  localStorage.setItem("token", respone.data.token);
  localStorage.setItem("refresh_token", respone.data.refreshToken);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
