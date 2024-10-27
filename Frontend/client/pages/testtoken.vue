<template>
  <div>
    <p>Test token</p>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth","authtoken"]
});
</script>

<style lang="scss" scoped></style>
