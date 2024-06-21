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
  <section class="mt-20">
    <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
      >
        Let's Get in Touch!
      </h1>
      <small class="lg:w-1/2 w-full leading-relaxed text-gray-500 text-sm">
        Say Hello and Let's Create Something Great!
      </small>
    </div>

    <UCard class="max-w-2xl mx-auto mb-10 p-6">
      <div class="flex justify-between">
        <div class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          <h1>Book a free call</h1>
          <small class="lg:w-1/2 w-full leading-relaxed text-gray-500 text-sm"
            >Let's talk about your project and how I can help you.</small
          >
        </div>

        <div>
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
        class="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900"
      >
        Or Send a message
      </h1>

      <UForm class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <UFormGroup label="Name">
            <UInput />
          </UFormGroup>
          <UFormGroup label="Email">
            <UInput />
          </UFormGroup>
        </div>

        <UFormGroup label="Interested In">
          <USelect
            v-model="option"
            :options="options"
            placeholder="Interested In"
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
  </section>
</template>
