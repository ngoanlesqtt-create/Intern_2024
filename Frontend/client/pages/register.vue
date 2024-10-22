<template>
  <div class="flex flex-col items-center shadow-2xl h-[300px]">
    <h1 class="font-bold text-3xl text-center">ĐĂNG KÝ</h1>
    <Form
      @submit="onSubmit"
      class="flex flex-col items-center h-[250px] justify-around w-1/2"
    >
      <Username />
      <Password />
      <Email />
      <PhoneNumber />
      <Address />

      <button>Đăng ký</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Form } from "vee-validate";
import Username from "~/components/Inputs/Username";
import Password from "~/components/Inputs/Password";
import Email from "~/components/Inputs/Email";
import PhoneNumber from "~/components/Inputs/PhoneNumber";
import Address from "~/components/Inputs/Address";




</script>

<style scoped></style>
