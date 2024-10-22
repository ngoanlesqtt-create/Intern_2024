<template>
  <Field
    class="bg-[#ededed] w-1/2"
    name="username"
    type="text"
    :rules="validateUsername"
    placeholder="Nhập username"
  />
  <ErrorMessage class="text-red-500" name="username" />
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";

const validateUsername = (value) => {
  if (!value) {
    return "Bạn chưa nhập username";
  }

  const regex = /^(?!.*[_.-]{2})[a-zA-Z0-9_-]{6,20}$/;
  if (!regex.test(value)) {
    return "Username phải có 6-20 ký tự long và chỉ chứa kí tự, số, dấu gạch dưới và dấu gạch nối.";
  }

  return true;
};
</script>
