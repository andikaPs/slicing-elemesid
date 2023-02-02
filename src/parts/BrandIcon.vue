<script setup>
  import BrandIcon from '@/assets/images/brand-icon.png'
  defineProps({
    className: String
  })
</script>

<template>
  <img :src="BrandIcon" alt="brand icon" :class="className">
</template>

<style>

</style>
