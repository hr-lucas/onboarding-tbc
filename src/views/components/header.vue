<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
    <header class="bg-black border-b-1 border-borderColor border-l-borderColor">
        <div class="mx-auto flex h-full max-h-[100px] max-w-xx items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
            <img @click="$router.push({ name: 'home' })" src="@/assets/logo.svg" alt="The Boss Club"
                class=" cursor-pointer">
            <RouterLink v-if="route.fullPath != '/'" to="/"
                class=" bg-boxColor text-white border-1 border-borderColor p-2 w-28 rounded text-center  cursor-pointer ">
                Voltar
            </RouterLink>
        </div>
    </header>
</template>
