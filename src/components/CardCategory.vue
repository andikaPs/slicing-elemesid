<script setup>
  import backgrounImage from '@/assets/images/header-bg.png'
  defineProps({
    imageUrl: String,
    title: String,
    color: String,
    items: Number
  })
</script>

<template>
  <div
    class="w-60 h-44 rounded-3xl flex-shrink-0 flex flex-col items-center justify-center snap-center transition-all lg:hover:h-48 group lg:relative lg:overflow-hidden cursor-pointer"
    :class="color">
    <div class="hidden lg:block absolute inset-0">
      <img :src="backgrounImage" alt="background image"
        class="w-full h-full object-cover opacity-5 hidden group-hover:block">
    </div>
    <img :src="imageUrl" alt="cupcake" class="w-16 lg:w-10 z-10">

    <div class="mt-5 text-center z-10">
      <h1 class="font-medium text-dark text-[16px]">{{ title }}</h1>
      <span class="font-normal text-sm text-dark">{{ items }} Items</span>
    </div>
  </div>
</template>

<style>

</style>
