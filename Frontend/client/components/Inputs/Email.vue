<template>
  <Field
    class="bg-[#ededed] w-1/2"
    name="email"
    type="email"
    placeholder="Nhập email"
    :rules="validateEmail"
  />
  <ErrorMessage class="text-red-500" name="email" />
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";

const validateEmail = (value) => {
  if (!value) {
    return "Bạn chưa nhập email";
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "Đây phải là một email hợp lệ";
  }

  return true;
};
</script>
