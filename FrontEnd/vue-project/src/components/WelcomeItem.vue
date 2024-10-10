<script setup>
import { store  } from './store.js'
import {  reactive, computed} from 'vue';
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <div>
    <button @click="store.increment()">
      From B: {{ store.count }}
    </button>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>
