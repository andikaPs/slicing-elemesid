<script setup>
  import Rating from '../components/Rating.vue'
  import SectionTitle from './SectionTitle.vue'
  import pizza from '@/assets/images/pizza.png'
  import pizza_meat from '@/assets/images/pizza_meat.png'
  import doner_kebab from '@/assets/images/doner_kebab.png'
  import salmon_roll from '@/assets/images/salmon_roll.png'
  import cupcake_choco from '@/assets/images/cupcake_choco.png'
  import doughnut_milk from '@/assets/images/doughnut_milk.png'
  import doughnut_unicorn from '@/assets/images/doughnut_unicorn.png'
  import kathi_kebab from '@/assets/images/kathi_kebab.png'
  import { reactive } from 'vue'
  import Card from '../components/Card.vue'
  import Button from '../components/Button.vue'

  const trendingRecipts = reactive([
    {
      id: Math.random(),
      title: 'Pizza Paperoni',
      category: 'pizza',
      rating: 4,
      imageUrl: pizza,
      color: 'bg-[#E6F3F5]'
    },
    {
      id: Math.random(),
      title: 'Pizza Meat',
      category: 'pizza',
      rating: 3,
      imageUrl: pizza_meat,
      color: 'bg-[#E6F3F5]',
    },
    {
      id: Math.random(),
      title: 'Doner Kebab',
      category: 'kebab',
      rating: 3,
      imageUrl: doner_kebab,
      color: 'bg-[#EAEEFA]'
    },
    {
      id: Math.random(),
      title: 'Salmon Roll',
      category: 'salmon',
      rating: 4,
      imageUrl: salmon_roll,
      color: 'bg-[#F9EEF3]'
    },
    {
      id: Math.random(),
      title: 'Cupcake Choco',
      category: 'cupcake',
      rating: 4,
      imageUrl: salmon_roll,
      color: 'bg-[#F0FEEB]'
    },
    {
      id: Math.random(),
      title: 'Doughnut Milk',
      category: 'doughnut',
      rating: 5,
      imageUrl: doughnut_milk,
      color: 'bg-[#F3F7D9]'
    },
    {
      id: Math.random(),
      title: 'Doughnut Unicorn',
      category: 'doughnut',
      rating: 4,
      imageUrl: doughnut_unicorn,
      color: 'bg-[#F3F7D9]'
    },
    {
      id: Math.random(),
      title: 'Kathi Kebab',
      category: 'kebab',
      rating: 4,
      imageUrl: kathi_kebab,
      color: 'bg-[#EAEEFA]'
    },
  ])


</script>

<template>
  <section class="mt-36 mx-8 lg:mt-48 lg:mx-28">
    <SectionTitle title="Browser Our Trending" />

    <div class="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-4">
      <Card v-for="trending in trendingRecipts" :key="trending.id" :imageUrl="trending.imageUrl" :title="trending.title"
        :category="trending.category" :rating="trending.rating" :color="trending.color" />
    </div>

    <div class="hidden lg:flex justify-center mt-28">
      <Button isPrimary class="px-8 py-2.5 text-white">ALL Receipts</Button>
    </div>
  </section>
</template>

<style>

</style>
