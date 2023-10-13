<script setup>
import { RouterView } from 'vue-router'
import Header from './views/components/header.vue';
import Footer from './views/components/footer.vue';
</script>

<template>
  <main class="bg-black  bg-[url('@/assets/logo-background.svg')] bg-no-repeat bg-center -z-10  ">
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>