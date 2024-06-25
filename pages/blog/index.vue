<script setup>
const { data } = await useAsyncData("blog-list", () =>
  queryContent("/blog")
    .only(["_path", "title", "publishedAt"])
    .sort({ publishedAt: -1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    const displayYear = year !== lastYear;
    post.displayYear = displayYear;
    post.year = year;
    result.push(post);
    lastYear = year;
  }

  return result;
});
</script>

<template>
  <section class="my-20">
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

    <div class="column">
      <div class="text-gray-400">date</div>
      <div>title</div>
    </div>

    <div
      class="column hover:bg-gray-50"
      v-for="post in posts"
      :key="post._path"
    >
      <div class="text-gray-500">{{ post.year }}</div>
      <div>
        <ULink :to="post._path">{{ post.title }}</ULink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 max-w-3xl mx-auto font-mono;
}
</style>
