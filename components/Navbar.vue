<script setup></script>

<template>
  <section class="w-full bg-white sticky top-0 border-b">
    <div class="max-w-5xl mx-auto py-5 px-4 flex items-center justify-between">
      <div>
        <ULink
          to="/"
          class="logo text-3xl md:text-5xl font-semibold text-gray-600"
        >
          _kayodev
        </ULink>
      </div>
      <div class="flex space-x-6 items-center font-medium text-gray-600">
        <ULink
          to="/blog/"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Blog
        </ULink>

        <ULink
          to="/about"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          About
        </ULink>

        <ULink
          to="/contact"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Contact
        </ULink>
        <!-- 
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly> -->
      </div>
    </div>
  </section>
</template>
