<template>
  <el-form-item
    label="Số điện thoại"
    :error="v$.phoneNumber.$error ? 'Số điện thoại là bắt buộc' : ''"
  >
    <el-input
      class="bg-[#ededed] w-1/2"
      type="number"
      placeholder="Nhập số điện thoại"
      name="phoneNumber"
      v-model="inputs.phoneNumber"
      @blur="v$.phoneNumber.$touch()"
    />
  </el-form-item>
</template>

<script setup>
import { useInputStore } from "~/stores/inputs";

// Khai báo store
const { inputs, v$ } = useInputStore();
</script>
