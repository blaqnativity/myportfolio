<script setup>
import { errorMessages } from "vue/compiler-sfc";

// github repo api fetch
const { data, pending, error } = await useFetch(
  "https://api.github.com/users/blaqnativity/repos"
);

const work = [
  {
    label: "Wordpress Site",
    icon: "i-heroicons-device-phone-mobile-20-solid",
    description:
      "  Custom web applications built to fit your unique business needs",
  },
  {
    label: "Frontend Development",
    icon: "i-heroicons-code-bracket-16-solid",
    description:
      "Beautiful and responsive web apps for mobile and desktop devices.",
  },
  {
    label: "Consultation",
    icon: "i-heroicons-light-bulb",
    description:
      "Expert advice and guidance to help your business succeed in the digital world.",
  },
];
</script>

<template>
  <!-- hero section -->
  <section id="hero">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
          Crafting the next generation of web applications
        </h1>
        <p class="mb-8 leading-relaxed">
          I'm a Frontend software developer with a passion for building
          functional web applications tailored to your specific requirements.
        </p>
        <div class="flex justify-center space-x-4">
          <UButton to="/contact" size="xl"
            >Got an idea? Lets talk
            <UIcon name="i-heroicons-chat-bubble-left-ellipsis-16-solid" />
          </UButton>
          <UButton to="/projects" size="xl"
            >See my work
            <UIcon name="i-heroicons-rectangle-stack-solid" />
          </UButton>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <NuxtImg
          class="object-cover object-center rounded"
          alt="hero"
          src="/images/promage.png"
        />
      </div>
    </div>
  </section>
  <!-- hero section -->

  <!-- my works section -->
  <section>
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
      >
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
          Things I do and brag about
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed">
          I help businesses connect with audiences, delivering greater brand
          engagement through innovative digital solutions.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 -m-4">
        <div class="p-4" v-for="job in work" :key="job.id">
          <div class="border border-gray-200 p-4 rounded-lg">
            <div
              class="p-2 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-transparent dark:border-2 text-green-500 dark:text-zinc-500 mb-4"
            >
              <UIcon :name="job.icon" class="w-8 h-8 dark:text-white" />
            </div>
            <h2 class="text-lg font-medium title-font mb-2">
              {{ job.label }}
            </h2>
            <p class="leading-relaxed text-sm dark:text-gray-500">
              {{ job.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- my works section -->

  <!-- testimonials section -->
  <section>
    <div class="container px-5 py-20 mx-auto">
      <div
        class="flex flex-wrap w-full mb-10 flex-col items-center text-center"
      >
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
          What people say about my work
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          I love hearing from my clients. Here is a selection of reviews just
          in!
        </p>
      </div>
      <div>
        <ClientTestimonials />
      </div>
    </div>
  </section>
  <!-- testimonials section -->

  <!-- github repo section -->
  <section id="repository" class="mb-20">
    <div
      class="flex flex-wrap w-full mt-20 mb-10 flex-col items-center text-center"
    >
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
        My Github Repositories
      </h1>
      <p class="lg:w-1/2 w-full leading-relaxed">
        Check out my github repo to find the code base of some of my works.
      </p>
    </div>

    <div v-if="pending">
      <div class="space-y-2">
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
      </div>
    </div>
    <div v-else-if="error">
      <div class="space-y-2 text-center max-w-2xl mx-auto">
        <span class="text-3xl font-bold text-red-600"
          >Error: {{ error.statusCode }}</span
        >

        <p class="text-sm font-normal">Error message: {{ error.message }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-6 max-w-5xl mx-auto" v-else>
      <div
        class="border rounded p-4 grid gap-2"
        v-for="repo in data"
        :key="repo"
      >
        <span class="text-lg font-semibold"> {{ repo.name }}</span>
        <span class="text-sm light:text-gray-500"> {{ repo.description }}</span>
        <ULink
          :to="repo.html_url"
          target="_blank"
          class="flex gap-2 items-center"
          ><span>See more</span>
          <UIcon name="i-heroicons-arrow-long-right-20-solid" />
        </ULink>
      </div>
    </div>
  </section>
  <!-- github repo section -->
</template>
