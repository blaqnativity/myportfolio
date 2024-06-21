<script setup></script>

<template>
  <section class="w-full bg-gray-100">
    <div class="max-w-6xl mx-auto py-6 px-4 flex items-center justify-between">
      <div>
        <ULink
          to="/"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Olukayode
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
          to="/projects"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Projects
        </ULink>

        <ULink
          to="#"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Contact
        </ULink>

        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
