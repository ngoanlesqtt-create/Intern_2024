<template>
    <Field
        class="bg-[#ededed] w-1/2"
        type="text"
        placeholder="Nhập địa chỉ"
        name="address"
        :rules="validateAddress"
      />
      <ErrorMessage class="text-red-500" name="address" />
  </template>
  
  <script setup>
  import { Field, Form, ErrorMessage } from "vee-validate";
  
  const validateAddress = (value) => {
    if (!value) {
      return "Bạn chưa nhập địa chỉ";
    }
  
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return "Địa chỉ không hợp lệ";
    }
  
    return true;
  };
  </script>
  