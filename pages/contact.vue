<script setup>
const options = [
  "Projects",
  "Consultancy",
  "General inquiry",
  "Connect",
  "Other",
];

const option = ref(options[0]);
</script>

<template>
  <section class="mt-20 dark:bg-transparent">
    <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
        Let's Get in Touch!
      </h1>
      <small
        class="lg:w-1/2 w-full leading-relaxed :lighttext-gray-500 text-sm"
      >
        Say Hello and Let's Create Something Great!
      </small>
    </div>

    <div class="p-4">
      <UCard class="max-w-2xl mx-auto mb-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div
            class="sm:text-3xl text-2xl font-medium title-font md:col-span-2"
          >
            <h1>Book a free call</h1>
            <small class="lg:w-1/2 w-full leading-relaxed text-sm"
              >Let's talk about your project and how I can help you.</small
            >
          </div>

          <div class="md:grid-cols-1">
            <UButton
              label="Book Now"
              size="lg"
              icon="i-heroicons-calendar-days-20-solid"
            />
          </div>
        </div>
      </UCard>

      <div class="max-w-2xl mx-auto mb-10">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-10 px-4 md:px-1"
        >
          Or Send a message
        </h1>

        <UForm class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <UFormGroup label="Name">
              <UInput />
            </UFormGroup>
            <UFormGroup label="Email">
              <UInput />
            </UFormGroup>
          </div>

          <UFormGroup label="Interested In">
            <USelect v-model="option" :options="options"
          /></UFormGroup>

          <UFormGroup label="Message"
            ><UTextarea placeholder="Type your personalized message..."
          /></UFormGroup>

          <UButton class="items-center gap-2" size="lg"
            ><span>Send Message</span>
            <UIcon name="i-heroicons-paper-airplane-16-solid"
          /></UButton>
        </UForm>
      </div>
    </div>
  </section>
</template>
