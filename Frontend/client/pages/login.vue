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

</script>

<style lang="scss" scoped></style>
