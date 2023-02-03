<script setup>
  import Button from '../components/Button.vue'
  import Navbar from '../components/Navbar.vue'
  import BrandIcon from './BrandIcon.vue'


</script>

<template>
  <header class="pt-7 px-8 flex justify-between items-center lg:pt-5 lg:px-28">
    <BrandIcon className="w-32 lg:w-40" />

    <Navbar />

    <div class="flex items-center">
      <a href="#" class="hidden text-dark font-medium text-sm mr-6 lg:block">Masuk</a>
      <Button isPrimary className="px-5 py-3 text-sm text-white">Daftar Sekarang</Button>
    </div>
  </header>
</template>

<style>

</style>
