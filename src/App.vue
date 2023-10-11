<script setup>
import { RouterView } from 'vue-router'
import Header from './views/components/header.vue';
</script>

<template>
  <main class=" bg-black h-full bg-[url('./src/assets/logo-background.svg')] bg-no-repeat bg-center -z-10">
    <Header />
    <RouterView class="h-screen"/>
  </main>
</template>