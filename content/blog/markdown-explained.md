---
title: "Markdown Explained Fully"
description: "All you need to get started with Markdown"
head:
  meta:
    - name: "keywords"
      content: "nuxt, vue, content"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "NuxtLabs"
    - name: "copyright"
      content: "© 2022 NuxtLabs"
    - name: "og:title"
    - content: "This is an opengraph title"
---

Certainly! Below is a sample file structure for a Nuxt.js project. This structure covers the basics and follows common conventions used in Nuxt.js applications.

```
my-nuxt-app/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   └── Header.vue
├── layouts/
│   └── default.vue
├── middleware/
│   └── auth.js
├── pages/
│   ├── index.vue
│   ├── about.vue
│   └── contact.vue
├── plugins/
│   └── axios.js
├── static/
│   └── favicon.ico
├── store/
│   └── index.js
├── nuxt.config.js
├── package.json
└── README.md
```

### Directory Breakdown

1. **assets/**: This directory is used to store uncompiled assets such as styles, images, or fonts.

   - **css/**: Contains CSS files like `main.css`.

2. **components/**: This directory is used for Vue.js components. These components can be used throughout your project.

   - **Header.vue**: An example of a reusable header component.

3. **layouts/**: This directory contains layout components which help in structuring your pages.

   - **default.vue**: The default layout that wraps around the page components.

4. **middleware/**: This directory contains middleware functions that run before rendering a page or a group of pages.

   - **auth.js**: An example middleware for authentication.

5. **pages/**: This directory contains your application’s views and routes. Nuxt.js automatically generates routes based on the files in this directory.

   - **index.vue**: The homepage of your application.
   - **about.vue**: An about page.
   - **contact.vue**: A contact page.

6. **plugins/**: This directory contains JavaScript plugins to be run before instantiating the root Vue.js application.

   - **axios.js**: An example plugin to configure Axios.

7. **static/**: This directory contains static files that are served directly by the server.

   - **favicon.ico**: An example of a static file.

8. **store/**: This directory contains your Vuex store files. Vuex is a state management pattern + library for Vue.js applications.

   - **index.js**: The main Vuex store file.

9. **nuxt.config.js**: This is the main configuration file for your Nuxt.js application. It allows you to customize the framework’s behavior.

10. **package.json**: This file contains metadata about the project and lists the dependencies and scripts.

11. **README.md**: A markdown file that contains the project’s documentation.

### Sample File Content

#### `nuxt.config.js`

```js
export default {
  target: "static",
  head: {
    title: "My Nuxt App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My Nuxt.js project",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/css/main.css"],
  plugins: ["@/plugins/axios.js"],
  components: true,
  buildModules: [],
  modules: [],
  build: {},
};
```

#### `pages/index.vue`

```vue
<template>
  <div>
    <Header />
    <h1>Welcome to My Nuxt App</h1>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
```

#### `components/Header.vue`

```vue
<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1em;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1em;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>
```

#### `store/index.js`

```js
export const state = () => ({
  counter: 0,
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
};

export const actions = {
  increment({ commit }) {
    commit("increment");
  },
};

export const getters = {
  counter: (state) => state.counter,
};
```

This structure and these examples should give you a solid foundation to start building your Nuxt.js project.
