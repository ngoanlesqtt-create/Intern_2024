<template>
  <el-form-item
    label="Tên người dùng"
    :error="v$.username.$error ? 'Tên người dùng là bắt buộc' : ''"
  >
    <el-input
      class="bg-[#ededed] w-1/2"
      name="username"
      type="text"
      v-model="inputs.username"
      placeholder="Nhập tên người dùng"
      @blur="v$.username.$touch()"
    />
  </el-form-item>
</template>

<script setup>
import { useInputStore } from "~/stores/inputs";

const { inputs, v$ } = useInputStore();
</script>
