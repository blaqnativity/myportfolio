<script setup>
const items = [
  {
    name: "Oluwakayode Micheal",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard.",
    job: "UI/UX Designer",
  },
  {
    name: "  Hinkris",
    description:
      "I like how you delivered my wordpress site just in time as we agreed. Plus the fact that your UI is very easy to navigate and you're always available if I had any quick fix or update request. Thank you Kayode",
    job: "Blogger",
  },
  {
    name: "  Medoye Abayomi",
    description:
      "I like how you delivered my wordpress site just in time as we agreed. Plus the fact that your UI is very easy to navigate and you're always available if I had any quick fix or update request. Thank you Kayode",
    job: "Blogger",
  },
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 5000);
});
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full',
    }"
  >
    <div class="text-center mx-auto max-w-2xl px-4 space-y-4">
      <p class="font-semibold text-lg">{{ item.name }}</p>
      <p class="font-normal text-sm text-gray-500 w-[70%] mx-auto">
        {{ item.description }}
      </p>
      <div class="h-1 w-[10%] bg-gray-300 rounded-full mx-auto"></div>
      <p class="font-semibold">{{ item.job }}</p>
    </div>
  </UCarousel>
</template>
