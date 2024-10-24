<template>
  <el-form-item
    label="Email"
    :error="v$.email.$error ? 'Email không hợp lệ' : ''"
  >
    <el-input
      class="bg-[#ededed] w-1/2"
      name="email"
      type="email"
      placeholder="Nhập email"
      v-model="inputs.email"
      @blur="v$.email.$touch()"
    />
  </el-form-item>
</template>

<script setup>
import { ElInput } from "element-plus";
import { useInputStore } from "~/stores/inputs";

const inputStore = useInputStore();
const { inputs, v$ } = inputStore;
</script>
