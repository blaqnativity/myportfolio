// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ui: {
    primary: "black",
    gray: "purple",
  },

  modules: ["@nuxt/ui", "@nuxtjs/color-mode", "@nuxt/image", "@nuxt/content"],

  colorMode: {
    preference: "system",
  },
});
