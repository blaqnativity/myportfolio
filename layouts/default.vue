<script setup>
const colorMode = useColorMode();
</script>

<template>
  <!-- navbar section -->
  <Navbar />
  <!-- navbar section -->

  <div class="max-w-5xl mx-auto text-gray-600 dark:text-white">
    <slot />
  </div>

  <!-- footer section -->
  <Footer />
  <!-- footer section -->
</template>
