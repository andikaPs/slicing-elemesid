<script setup>
  import Button from '../components/Button.vue'
  import HeroImage from './HeroImage.vue'
</script>

<template>
  <section class="mt-12 mx-8 lg:mt-20 lg:mx-28 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 ">
    <div class="col-span-1 lg:row-span-1 ">
      <h1 class="font-medium text-5xl text-primary leading-normal lg:text-6xl lg:whitespace-nowrap">Good Food Us <br />
        Good Mood</h1>
    </div>
    <div class="col-span-1 my-16 max-w-[412px] h-64 relative lg:col-span-2 lg:my-0 lg:row-span-2 lg:max-w-full ">
      <HeroImage />
    </div>
    <div class="col-span-1 flex justify-center lg:row-span-1 lg:mt-5">
      <p class="text-secondary text-lg leading-[29px]">I would think that conserving our natural resources should be a
        conservative
        position:
        Not to waste food, and
        not to throw away a lot of the food that we buy.</p>
    </div>
    <div class="col-span-1 flex mt-8 space-x-3 lg:mt-5">
      <Button isPrimary hasShadow className="px-5 py-3 text-sm text-white">Daftar Sekarang</Button>
      <Button className="px-5 py-3 text-sm bg-[#F2F2F2] text-dark">About Us</Button>
    </div>
  </section>
</template>

<style>

</style>
