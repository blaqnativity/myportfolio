<template>
  <Navbar />
  <div class="max-w-6xl mx-auto px-4">
    <NuxtPage />
  </div>
  <!-- footer section -->
  <footer class="text-gray-600 border-t">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-5 items-start py-10 px-4"
    >
      <div class="col-span-3 space-y-6">
        <NuxtLink>Olukayode</NuxtLink>
        <p>Shaping world class websites, designs and experiences.</p>
        <div class="flex items-center gap-6">
          <div class="bg-gray-100 p-6 rounded-md w-fit">
            <UIcon name="i-dashicons-instagram" />
          </div>
          <div class="bg-gray-100 p-6 rounded-md w-fit">
            <UIcon name="i-dashicons-instagram" />
          </div>
          <div class="bg-gray-100 p-6 rounded-md w-fit">
            <UIcon name="i-dashicons-instagram" />
          </div>
        </div>

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
          <NuxtLink>Blog</NuxtLink>
          <NuxtLink>Portfolio</NuxtLink>
          <NuxtLink>Projects</NuxtLink>
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <p>Quick links</p>
        <p>If you have any questions, please feel free to contact me.</p>

        <div class="w-fit">
          <UButton to="/" size="xl"
            >Let's talk
            <UIcon name="i-heroicons-chat-bubble-left-ellipsis-16-solid" />
          </UButton>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer section -->
</template>
