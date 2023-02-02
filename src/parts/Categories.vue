<script setup>
  import CardCategory from '@/components/CardCategory.vue'
  import cupcake from '@/assets/images/cupcake.svg'
  import pizza from '@/assets/images/pizza.svg'
  import kebab from '@/assets/images/kebab.svg'
  import salmon from '@/assets/images/salmon.svg'
  import doughnut from '@/assets/images/doughnut.svg'
  import { reactive } from 'vue'

  const categories = reactive([
    {
      id: 1,
      title: 'Cupcake',
      imageUrl: cupcake,
      items: 22,
      color: 'bg-[#F0FEEB]'
    },
    {
      id: 2,
      title: 'Pizza',
      imageUrl: pizza,
      items: 25,
      color: 'bg-[#E4F2F4]'
    },
    {
      id: 3,
      title: 'Kebab',
      imageUrl: kebab,
      items: 12,
      color: 'bg-[#EAEEFA]'
    },
    {
      id: 4,
      title: 'Salmon',
      imageUrl: salmon,
      items: 22,
      color: 'bg-[#F9EEF3]'
    },
    {
      id: 5,
      title: 'Doughnut',
      imageUrl: doughnut,
      items: 11,
      color: 'bg-[#F3F7D9]'
    },
    {
      id: 1,
      title: 'Cupcake',
      imageUrl: cupcake,
      items: 22,
      color: 'bg-[#F0FEEB]'
    },
    {
      id: 2,
      title: 'Pizza',
      imageUrl: pizza,
      items: 25,
      color: 'bg-[#E4F2F4]'
    },
    {
      id: 3,
      title: 'Kebab',
      imageUrl: kebab,
      items: 12,
      color: 'bg-[#EAEEFA]'
    },
    {
      id: 4,
      title: 'Salmon',
      imageUrl: salmon,
      items: 22,
      color: 'bg-[#F9EEF3]'
    },
    {
      id: 5,
      title: 'Doughnut',
      imageUrl: doughnut,
      items: 11,
      color: 'bg-[#F3F7D9]'
    },
  ])

</script>

<template>
  <section class="mt-36 mx-8 lg:mt-48 lg:mx-28">
    <h1 class="font-medium text-2xl text-dark">Browser Our Category <br /> <span class="text-primary">Receipt</span>
    </h1>
  </section>
  <section class="my-10 w-full flex gap-5 overflow-x-auto snap-x snap-mandatory lg:pl-28 scroll-area">
    <CardCategory v-for="category in categories" :key="category.id" :imageUrl="category.imageUrl"
      :title="category.title" :color="category.color" :items="category.items" />
  </section>
</template>

<style scoped>
.scroll-area {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-area::-webkit-scrollbar {
  display: none;
}
</style>
