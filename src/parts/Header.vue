<script setup>
  import Button from '../components/Button.vue'
  import BrandIcon from './BrandIcon.vue'


</script>

<template>
  <header class="pt-7 px-8 flex justify-between items-center lg:pt-5 lg:px-28">
    <BrandIcon className="w-32 lg:w-40" />

    <nav>
      <ul class="hidden lg:flex text-secondary space-x-[32px] text-sm font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li class="relative">
          <span
            class="absolute text-[8px] z-10 -top-5 -right-5 bg-[#E7462D] text-white px-2.5 py-0.5 rounded-3xl font-bold">HOT</span>
          <a href="#">Promotions</a>
        </li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>

    <div class="flex items-center">
      <a href="#" class="hidden text-dark font-medium text-sm mr-6 lg:block">Masuk</a>
      <Button isPrimary className="px-5 py-3 text-sm text-white">Daftar Sekarang</Button>
    </div>
  </header>
</template>

<style>

</style>
