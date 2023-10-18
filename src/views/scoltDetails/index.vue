<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DescriptionComponent from './components/DescriptionComponent.vue';
import DetailsComponent from './components/DetailsComponent.vue';
import GalleryComponent from './components/GalleryComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log("Router -> ", route.params);

const ker = { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' };

</script>
<template>
    <section class=" p-4 mt-24 flex flex-wrap max-w-xx  mx-auto min-h-screen  ">
        <div class="flex w-full gap-5 max-md:flex-wrap max-md:h-full">
            <div class="flex flex-col gap-4 w-80 max-md:w-full  ">
                <ProfileComponent :data="ker" />
                <div class="desktop max-md:hidden">
                    <DetailsComponent />
                </div>
            </div>
            <div class="flex flex-col w-full gap-6">
                <DescriptionComponent />
                <GalleryComponent />
                <div class="mobile max-md:w-full md:hidden">
                    <DetailsComponent />
                </div>

            </div>
        </div>
    </section>
</template>
