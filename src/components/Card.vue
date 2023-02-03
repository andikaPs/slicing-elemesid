<script setup>
  import Rating from './Rating.vue'
  import backgrounImage from '@/assets/images/header-bg.png'

  defineProps({
    imageUrl: String,
    title: String,
    category: String,
    rating: Number,
    color: String
  })
</script>

<template>
  <div
    class="px-8 py-6 col-span-1 w-full h-full flex flex-col rounded-2xl shadow-xl shadow-black/10 group lg:relative lg:overflow-hidden cursor-pointer"
    :class="color">
    <div class="hidden lg:block absolute inset-0">
      <img :src="backgrounImage" alt="background image"
        class="w-full h-full object-cover opacity-5 hidden group-hover:block">
    </div>

    <div class="w-32 h-32 z-10">
      <img :src="imageUrl" :alt="`image-${title}`" class="w-full h-full object-cover">
    </div>

    <div class="mt-5 z-10">
      <h1 class="text-black">{{ title }}</h1>
      <span class="text-primary mb-3 inline-block capitalize">{{ category }}</span>

      <Rating :rating="rating" className="w-4 h-4" />
    </div>
  </div>

</template>

<style>

</style>
