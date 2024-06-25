<script setup>
// const colorMode = useColorMode();
</script>

<template>
  <Navbar />

  <div class="max-w-5xl mx-auto">
    <slot />
  </div>

  <!-- footer section -->
  <footer class="text-gray-600 border-t">
    <div
      class="max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-5 items-start py-10 px-4"
    >
      <div class="col-span-3 space-y-6">
        <ULink
          class="logo text-2xl md:text-3xl font-semibold text-gray-600"
          to="/"
          >_kayodey</ULink
        >
        <p>Shaping world class websites, designs and experiences.</p>

        <div>
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-envelope-20-solid" />
            <p>Nuxt development updates</p>
          </div>

          <div class="mt-2 w-fit flex items-center gap-1">
            <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
            <UButton label="Subscribe" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <p>Quick links</p>
        <div class="flex flex-col gap-6 mt-4">
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
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <p>Contact</p>
        <p>If you have any questions, please feel free to contact me.</p>

        <div class="w-fit">
          <UButton to="/contact" label="Let's talk" />
        </div>
      </div>
    </div>
  </footer>
  <!-- footer section -->
</template>
