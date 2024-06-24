<script setup>
import { errorMessages } from "vue/compiler-sfc";

// github repo api fetch
const { data, pending, error } = await useFetch(
  "https://api.github.com/users/blaqnativity/repos"
);
</script>

<template>
  <!-- hero section -->
  <section class="text-gray-600">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
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
  <section class="text-gray-600">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
      >
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          Things I do and brag about
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          I help businesses connect with audiences, delivering greater brand
          engagement through innovative digital solutions.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 -m-4">
        <div class="p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <UIcon name="i-heroicons-device-phone-mobile-20-solid" />
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Wordpress Site
            </h2>
            <p class="leading-relaxed text-base">
              Custom web applications built to fit your unique business needs
            </p>
          </div>
        </div>
        <div class="p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <UIcon name="i-heroicons-code-bracket-16-solid" />
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Frontend Development
            </h2>
            <p class="leading-relaxed text-base">
              Beautiful and responsive web apps for mobile and desktop devices.
            </p>
          </div>
        </div>
        <div class="p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <UIcon name="i-heroicons-light-bulb" />
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Consultation
            </h2>
            <p class="leading-relaxed text-base">
              Expert advice and guidance to help your business succeed in the
              digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- my works section -->

  <!-- testimonials section -->
  <section class="text-gray-600">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-10 flex-col items-center text-center"
      >
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          What people say about my work
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          I love hearing from my clients. Here is a selection of reviews just
          in!
        </p>
      </div>
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <p class="leading-relaxed text-lg">
          Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
          taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
          taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
          fanny pack vaporware. Man bun next level coloring book skateboard four
          loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo
          juice before they sold out gentrify plaid gastropub normcore XOXO 90's
          pickled cindigo jean shorts. Slow-carb next level shoindigoitch
          ethical authentic, yr scenester sriracha forage franzen organic
          drinking vinegar.
        </p>
        <span
          class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
        ></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
          HOLDEN CAULFIELD
        </h2>
        <p class="text-gray-500">Senior Product Designer</p>
      </div>
    </div>
  </section>
  <!-- testimonials section -->

  <!-- github repo section -->
  <section id="repository" class="mb-20">
    <div
      class="flex flex-wrap w-full mt-20 mb-10 flex-col items-center text-center"
    >
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
      >
        My Github Repositories
      </h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
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
        <span class="text-sm text-gray-500"> {{ repo.description }}</span>
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
