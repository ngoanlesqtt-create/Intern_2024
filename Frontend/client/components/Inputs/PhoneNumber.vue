<template>
  <Field
    class="bg-[#ededed] w-1/2"
    type="number"
    placeholder="Nhập số điện thoại"
    name="phoneNumber"
    :rules="validatePhoneNumber"
  />
  <ErrorMessage class="text-red-500" name="phoneNumber" />
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";

const validatePhoneNumber = (value) => {
  if (!value) {
    return "Bạn chưa nhập số điện thoại";
  }

  const regex = /^\d{10,}$/;
  if (!regex.test(value)) {
    return "Số điện thoại không hợp lệ";
  }

  return true;
};
</script>
