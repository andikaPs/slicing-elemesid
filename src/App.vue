<script setup>
  import { onMounted } from 'vue'
  import Rating from './components/Rating.vue'
  import Categories from './parts/Categories.vue'
  import Footer from './parts/Footer.vue'
  import Header from './parts/Header.vue'
  import Hero from './parts/Hero.vue'
  import Trending from './parts/Trending.vue'

  onMounted(() => {
    document.title = 'Landing Page'
  })
</script>

<template>
  <header class="bg-header relative w-full bg-white/5">
    <Header />
    <Hero />
  </header>

  <main>
    <Categories />
    <Trending />
  </main>

  <Footer />
</template>

<style scoped>
.bg-header::before {
  content: "";
  background: url(./assets/images/header-bg.png) no-repeat;
  position: absolute;
  inset: 0;
  z-index: -9;
  opacity: 0.029;
}
</style>
