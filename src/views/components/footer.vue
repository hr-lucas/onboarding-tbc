<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>
<template>
    <footer class="bg-black border-b-1 border-borderColor border-t-1 h-40">
        <div class="mx-auto flex h-16 max-w-xx items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
            <img @click="$router.push({ name: 'home' })" src="@/assets/logo.svg" alt="" srcset="" class=" cursor-pointer">
            <RouterLink to="terms" class="text-white text-center ">
                Termos de privacidade
            </RouterLink>



        </div>
    </footer>
</template>
