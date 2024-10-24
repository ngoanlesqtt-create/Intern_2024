<template>
  <Field
    class="bg-[#ededed] w-1/2"
    name="password"
    type="password"
    placeholder="Nhập password"
    :rules="validatePassword"
  />
  <ErrorMessage class="text-red-500" name="password" />
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";

const validatePassword = (value) => {
  if (!value) {
    return "Bạn chưa nhập password";
  }

  const regex = /^(?=.*[_.-])(?!.*[_.-]{2})[a-zA-Z0-9_.-]{6,20}$/;
  if (!regex.test(value)) {
    return "password phải có 6-20 ký tự và chỉ chứa kí tự, số, dấu gạch dưới và dấu gạch nối.";
  }

  return true;
};
</script>
