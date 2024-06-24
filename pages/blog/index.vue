<script setup>
const { data: posts } = await useAsyncData("blog-list", () =>
  queryContent("/blog").only(["_path", "title"]).find()
);

console.log(posts);
</script>

<template>
  <section class="mt-20">
    <div
      class="flex flex-wrap w-full mb-10 flex-col items-center text-center px-4"
    >
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
      >
        Website Design, and Frontend Development Articles.
      </h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Get Website Design, Development, Nodejs, Vue and Typescript Related
        Articles, Tips, Web Hosting deals coupons and more.
      </p>
    </div>

    <ul>
      <li v-for="post in posts" :key="post._path">
        <ULink :to="post._path">{{ post.title }}</ULink>
      </li>
    </ul>
  </section>
</template>
