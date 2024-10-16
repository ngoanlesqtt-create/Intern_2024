<script setup>
import { defineProps, ref, watch, defineEmits } from 'vue'
// Định nghĩa props
const props = defineProps({
  password: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:password'])
const localValue = ref(props.password)

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(() => props.password, (newValue) => {
  localValue.value = newValue
})
</script>
<template>
    <div class="flex items-center justify-evenly mb-4">
        <label class="mr-2">Password:</label>
        <input class="border-solid border-2 border-indigo-600 rounded-lg p-2 flex-1" type="password" v-model="localValue" >
    </div>
</template>