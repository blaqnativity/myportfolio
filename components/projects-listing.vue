<script setup>
const projects = [
  {
    label: "The Rootshive",
    url: "https://therootshive.com/",
    job: "Frontend Intern",
    image_path: "/images/rh.png",
    desc: "Get more done faster and smarter while transforming your business. Bring every side of your business together — payments, segmentation, link-in-bios, AI, Fraud-detection and more",
  },
  {
    label: "Antimii",
    url: "https://antimi.vercel.app/",
    job: "Nuxt Portfolio",
    image_path: "/images/mock.png",
    desc: "Say goodbye to logging into multiple banking apps. With Antimii, everything you need can be exported one place.",
  },
  {
    label: "Promage Force",
    url: "https://promageforce.com/",
    job: "Wordpress Designer",
    image_path: "/images/promage.png",
    desc: "Seamless, cloud computing solutions and Salesforce solutions. We empower businesses of all sizes to harness cloud computing, manage data, streamline operations, and accelerate business.",
  },
];
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="px-5 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="" v-for="project in projects" :key="project.url">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <NuxtImg
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="project.image_path"
              alt="blog"
            />
            <div class="p-4 space-y-1">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                {{ project.job }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900">
                {{ project.label }}
              </h1>
              <p class="leading-relaxed">
                {{ project.desc }}
              </p>
              <div class="">
                <ULink
                  :to="project.url"
                  inactive-class="text-gray-400 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm"
                  target="_blank"
                >
                  Learn more
                </ULink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
