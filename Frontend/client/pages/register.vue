<template>
  <div class="flex flex-col items-center shadow-2xl h-[300px]">
    <h1 class="font-bold text-3xl text-center">ĐĂNG KÝ</h1>
    <el-form
      class="flex flex-col items-center h-[250px] justify-around w-1/2"
      @submit.prevent="onSubmit"
    >
      <Username />
      <Password />
      <Email />
      <PhoneNumber />
      <el-button type="primary" native-type="submit"> Đăng ký</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import Username from "~/components/inputs/inputregister/Username.vue";
import Password from "~/components/inputs/inputregister/Password.vue";
import Email from "~/components/inputs/inputregister/Email.vue";
import PhoneNumber from "~/components/inputs/inputregister/PhoneNumber.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { ElForm, ElButton } from "element-plus";
import { useInputStore } from "~/stores/inputregister";

const router = useRouter();
const { inputs, v$ } = useInputStore();

const onSubmit = async () => {
  v$.$touch();
  const isValid = await v$.$validate();
  if (isValid) {
    const account = {
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
    };
    try {
      const response = await axios.post(
        "https://localhost:7029/register",
        account
      );
      const result = await response.data;
      console.log(result);
      router.push("/login");
    } catch (e: any) {
      if (typeof e.response.data.Password !== "undefined")
        alert(e.response.data.Password);
      else alert(e.response.data);
    }
  }
};
</script>

<style scoped></style>
