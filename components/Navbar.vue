<script setup>
const links = [
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
</script>

<template>
  <section
    class="w-full bg-white border-b dark:border-b-zinc-900 dark:bg-transparent"
  >
    <div class="max-w-5xl mx-auto py-5 px-4 flex items-center justify-between">
      <div>
        <ULink
          :to="'/'"
          class="logo text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100"
        >
          _kayodey
        </ULink>
      </div>
      <div class="flex space-x-6 items-center font-medium text-gray-600">
        <ULink
          v-for="link in links"
          :key="link.label"
          :to="link.link"
          active-class="text-gray-900 dark:text-white"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ link.label }}
        </ULink>

        <div>
          <ColorModeSelector />
        </div>
      </div>
    </div>
  </section>
</template>
