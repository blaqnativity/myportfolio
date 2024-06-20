<script setup></script>

<template>
  <section class="w-full bg-gray-100">
    <div class="max-w-6xl mx-auto py-6 px-4 flex items-center justify-between">
      <div>
        <NuxtLink to="/">Olukayode</NuxtLink>
      </div>
      <div class="flex space-x-6 items-center font-medium text-gray-600">
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/">Contact</NuxtLink>

        <UIcon name="i-heroicons-moon-20-solid" class="cursor-pointer" />
      </div>
    </div>
  </section>
</template>
