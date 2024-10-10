<script setup lang="ts">
import {  reactive,ref} from 'vue';
  const hello="vuejs"
  const count=ref(0)
  const obj=reactive({
    title:"vuejs",
    author:"Ngoan"
  })
  
  const increase=()=>{
    count.value++
  }
</script>

<template>
  <p class="red">Hello {{ count }}</p>
  <p>{{ obj.title }}</p>
  <button v-on:click="increase">CLick me</button>
</template>

<style>
  .red{
    color: red;
  }
</style>
