<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
    <footer class="bg-black border-b-1 border-b-gray-500  border-t-1 h-40">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
            <img @click="$router.push({ name: 'home' })" src="@/assets/logo.svg" alt="" srcset="" class=" cursor-pointer">
            <RouterLink v-if="route.fullPath != '/'" to="/"
                class=" bg-boxColor text-white border-1 border-gray-500 p-2 w-28 rounded text-center ">
                Voltar
            </RouterLink>
        </div>
    </footer>
</template>
