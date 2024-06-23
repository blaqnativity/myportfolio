<script setup>
const route = useRoute();
</script>

<template>
  <main>post id is {{ route.params.id }}</main>
</template>
