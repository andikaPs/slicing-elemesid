<script setup>
  import { ref } from 'vue'
  import ic_star from '@/assets/icons/star.svg'
  import ic_starplaceholder from '@/assets/icons/starplaceholder.svg'

  const props = defineProps({
    rating: Number,
    className: String
  })

  const maxRating = ref(5)
  const star = ref(props.rating <= maxRating.value ? Math.floor(props.rating) : maxRating.value)
  const starPlaceholder = ref(Math.ceil(maxRating.value - star.value))

</script>

<template>
  <div class="flex space-x-3">
    <div v-for="item in star">
      <img :src="ic_star" alt="icon star" :class="className" />
    </div>
    <div v-for="item in starPlaceholder">
      <img :src="ic_starplaceholder" alt="icon star" :class="className" />
    </div>
  </div>
</template>

<style>

</style>
