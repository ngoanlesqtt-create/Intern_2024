<script setup>
import { defineProps, ref, watch, defineEmits } from 'vue'
// Định nghĩa props
const props = defineProps({
  username: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:username'])
const localValue = ref(props.username)

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(() => props.username, (newValue) => {
  localValue.value = newValue
})
</script>
<template>
     <div class="flex items-center justify-evenly mb-4">
  <label class="mr-2">Username:</label>
  <input class="border-solid border-2 border-indigo-600 rounded-lg p-2 flex-1" v-model="localValue">
</div>
</template>