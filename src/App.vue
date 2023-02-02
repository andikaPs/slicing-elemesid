<script setup>
  import Rating from './components/Rating.vue'

</script>

<template>
  <div class="grid place-content-center h-screen">
    <h1 class="text-2xl font-semibold text-gray-500 uppercase tracking-widest">Hello Vue</h1>
    <Rating :rating="4.2" className="w-6 h-6" />
  </div>
</template>

<style>

</style>
