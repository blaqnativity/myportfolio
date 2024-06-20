<script setup>
const { data, error } = await useFetch(
  "https://api.github.com/users/blaqnativity/repos"
);
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
      >
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          Portfolio
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Designed Web apps for Small and Medium Sized Business and did UI/UX
          enhancements to bring more customers to the business.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
        <div
          class="flex flex-col gap-2 border p-6 rounded-xl hover:bg-gray-50"
          v-for="repo in data"
          :key="repo.id"
        >
          <a
            :href="repo.html_url"
            target="_blank"
            class="font-semibold text-lg text-gray-600"
          >
            {{ repo.name }}</a
          >
          <span class="text-sm font-normal text-gray-400">{{
            repo.description
          }}</span>

          <a
            :href="repo.html_url"
            target="_blank"
            class="font-normal text-sm text-gray-400"
          >
            Updated at: {{ repo.updated_at }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
