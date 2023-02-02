<script setup>
  import imgSaladTomato from '@/assets/images/green-salad-tomato.png'
  import Rating from '../components/Rating.vue'
</script>

<template>
  <div
    class="w-60 h-60 rounded-full bg-[#C4C4C4]/20 grid place-content-center absolute left-0 lg:w-[518px] lg:h-[518px] lg:-top-10 lg:left-52">
    <img :src="imgSaladTomato" alt="image salad tomato" class="w-48 lg:w-[412px]">
  </div>
  <div
    class="bg-white/70 px-7 py-4 rounded-2xl flex space-x-4 items-center absolute right-0 bottom-0 shadow-xl shadow-black/10 backdrop-filter backdrop-blur-sm lg:px-8 lg:-bottom-52 lg:right-80">
    <img :src="imgSaladTomato" alt="mini image salad tomato" class="w-14 h-14">

    <div>
      <h2 class="text-sm text-black">Green Salad Tomato</h2>
      <p class="text-secondary text-xs mt-1 mb-3">Tomato</p>
      <Rating :rating="4" className="w-4 h-4" />
    </div>
  </div>
</template>

<style>

</style>
