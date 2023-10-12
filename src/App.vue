<script setup>
import { RouterView } from 'vue-router'
import Header from './views/components/header.vue';
</script>

<template>
  <main class="bg-black bg-[url('@/assets/logo-background.svg')] bg-no-repeat bg-center -z-10 h-screen">
    <Header />
    <RouterView />

  </main>
</template>