<script setup>
  defineProps({
    imageUrl: String,
    title: String,
    color: String,
    items: Number
  })
</script>

<template>
  <div
    class="w-60 h-44 hover:h-48 rounded-3xl flex-shrink-0 flex flex-col items-center justify-center snap-center transition-all"
    :class="color">
    <img :src="imageUrl" alt="cupcake" class="w-16">

    <div class="mt-5 text-center">
      <h1 class="font-medium text-dark text-[16px]">{{ title }}</h1>
      <span class="font-normal text-sm text-dark">{{ items }} Items</span>
    </div>
  </div>
</template>

<style>

</style>
