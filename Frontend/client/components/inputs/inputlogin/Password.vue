<template>
  <el-form-item
    label="Mật khẩu"
    :error="v$.password.$error ? 'Mật khẩu là bắt buộc' : ''"
  >
    <el-input
      class="bg-[#ededed] w-1/2"
      name="password"
      type="password"
      placeholder="Nhập mật khẩu"
      v-model="inputs.password"
      @input="v$.password.$touch()"
      @blur="v$.password.$touch()"
    />
  </el-form-item>
</template>

<script setup>
import {useInputLoginStore} from '~/stores/inputlogin'

const { inputs, v$ } = useInputLoginStore();
</script>
