<script setup>
  import CardCategory from '@/components/CardCategory.vue'
  import cupcake from '@/assets/images/cupcake.svg'
  import pizza from '@/assets/images/pizza.svg'
  import kebab from '@/assets/images/kebab.svg'
  import salmon from '@/assets/images/salmon.svg'
  import doughnut from '@/assets/images/doughnut.svg'
  import { onMounted, reactive, ref } from 'vue'
  import Button from '../components/Button.vue'
  import SectionTitle from './SectionTitle.vue'

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

  let scrollRef = null
  const valueOfScrollLeft = ref(0)

  onMounted(() => {
    scrollRef = document.querySelector('.scroll-area')
  })

  const handleNext = () => {
    valueOfScrollLeft.value += 250
    if (valueOfScrollLeft.value > scrollRef.offsetWidth) {
      scrollRef.scrollTo(0, 0)
      valueOfScrollLeft.value = 0
      return
    }
    scrollRef.scrollTo(valueOfScrollLeft.value, 0)
  }
  const handlePrev = () => {
    if (valueOfScrollLeft.value > 0) {
      valueOfScrollLeft.value -= 250
      scrollRef.scrollTo(valueOfScrollLeft.value, 0)
    }
  }

</script>

<template>
  <section class="mt-36 mx-8 lg:mt-48 lg:mx-28">
    <SectionTitle title="Browser Our Category" />
  </section>
  <section
    class="mt-10 w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory lg:pl-28 scroll-area lg:h-48 scroll-smooth">
    <CardCategory v-for="category in categories" :key="category.id" :imageUrl="category.imageUrl"
      :title="category.title" :color="category.color" :items="category.items" />
  </section>
  <div class="hidden mx-28 lg:flex space-x-3 float-right mt-3">
    <Button isPrimary className="px-3 py-2 text-white flex items-center uppercase text-sm" :onClick="handlePrev">
      <span class="w-6 h-6 mr-1.5 rounded-full grid place-content-center bg-white text-dark">
        <svg class="w-4 h-4" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.0257 8.82185L14.4693 0.280476C14.8837 -0.0934919 15.555 -0.0934919 15.9705 0.280476C16.3848 0.654443 16.3848 1.26186 15.9705 1.63583L7.27592 9.49949L15.9694 17.3631C16.3838 17.7371 16.3838 18.3445 15.9694 18.7194C15.555 19.0934 14.8826 19.0934 14.4683 18.7194L5.02465 10.1781C4.61655 9.80797 4.61655 9.191 5.0257 8.82185Z"
            fill="#8BAC3E" />
        </svg>
      </span>
      Prev
    </Button>
    <Button isPrimary className="px-3 py-2 text-white flex items-center uppercase text-sm" :onClick="handleNext">
      <span class="w-6 h-6 mr-1.5 rounded-full grid place-content-center bg-white text-dark">
        <svg class="w-4 h-4" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_307_4303)">
            <path
              d="M14.2314 8.85223L6.06946 0.692977C5.71132 0.335739 5.13107 0.335739 4.77202 0.692977C4.41388 1.05021 4.41388 1.63046 4.77202 1.9877L12.2866 9.49956L4.77293 17.0114C4.41479 17.3687 4.41479 17.9489 4.77293 18.307C5.13107 18.6643 5.71222 18.6643 6.07036 18.307L14.2323 10.1478C14.585 9.79424 14.585 9.20487 14.2314 8.85223Z"
              fill="#8BAC3E" />
          </g>
          <defs>
            <clipPath id="clip0_307_4303">
              <rect width="18.15" height="18.15" fill="white" transform="translate(0.425049 0.425049)" />
            </clipPath>
          </defs>
        </svg>
      </span>
      Next
    </Button>
  </div>
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
