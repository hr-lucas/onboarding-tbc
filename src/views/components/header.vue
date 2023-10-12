<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../../router';

function redirectToHome() {
    router.push({ name: "home" })
}
</script>
<template>
    <header class="bg-black border-b-1 border-b-gray-500 border-l-white">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
            <img src="src/assets/logo.svg" alt="" srcset="">
            <button v-on:click="redirectToHome()" class="bg-white ">Voltar</button>
        </div>
    </header>
</template>
