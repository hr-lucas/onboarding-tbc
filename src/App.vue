<script setup>
import { RouterView } from 'vue-router'
import Header from './views/components/header.vue';
</script>

<template>
  <div class=" bg-black h-screen">
    <Header />
    <RouterView />
  </div>
</template>