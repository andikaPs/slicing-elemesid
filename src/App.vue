<script setup>
  import { onMounted } from 'vue'
  import Rating from './components/Rating.vue'
  import Header from './parts/Header.vue'

  onMounted(() => {
    document.title = 'Landing Page'
  })
</script>

<template>
  <Header />
</template>

<style>

</style>
