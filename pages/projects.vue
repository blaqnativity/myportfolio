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
    <div class="px-5 py-24 mx-auto">
      <div
        class="flex flex-wrap w-full mb-10 flex-col items-center text-center"
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

      <section class="text-gray-600 body-font">
        <div class="px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div
              class="p-4 md:w-1/3"
              v-for="project in projects"
              :key="project.url"
            >
              <div
                class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              >
                <NuxtImg
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  :src="project.image_path"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    {{ project.job }}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {{ project.label }}
                  </h1>
                  <p class="leading-relaxed mb-3">
                    {{ project.desc }}
                  </p>
                  <div class="flex items-center flex-wrap">
                    <ULink
                      :to="project.url"
                      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
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
    </div>
  </section>
</template>
