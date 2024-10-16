<script setup>
import Button from '@/components/Button/Button.vue';
import Email from '@/components/Email/Email.vue';
import Password from '@/components/Password/Password.vue';
import Username from '@/components/Username/Username.vue';
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators'

const state = reactive({
    username: '',
    password: '',
    //   contact: {
    //     email: ''
    //   }
    })
    const rules = computed(() => ({
  username: { required },
  password: { required },
//   contact: {
//     email: { required, email }
//   }
}));
    const v$ = useVuelidate(rules, state);

const handleSubmit =async () => {
v$.value.$touch()
 
 if (v$.value.$invalid) {
    console.log(v$.value.$error);
    return; // Dừng lại nếu biểu mẫu không hợp lệ
  }

  // Xử lý gửi biểu mẫu nếu tất cả đều hợp lệ
  console.log('Tên người dùng:', state.username);
  console.log('Mật khẩu:', state.password);
  //console.log('Email:', state.contact.email);
}
</script>
<template>
    <div class="flex items-center w-1/2">
        <form @submit.prevent="handleSubmit" class="flex flex-col justify-around shadow-2xl h-auto w-full	p-4">
                <h1 class="text-center font-bold">Đăng ký</h1>
                <Username v-model="state.username" />
                <Password v-model="state.password"/>
                <!-- <Email v-model="state.contact.email"/> -->
                <Button ></Button>
        </form>
    </div>
</template>

  