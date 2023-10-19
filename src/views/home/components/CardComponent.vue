<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    cardData: {
        type: Object, // Tipo de dados que você espera receber
        required: true, // Obrigatório
    },
});
</script>
<template>
    <div class=" p-3">
        <a href="#" class="group block overflow-hidden justify-center w-64 h-96 ">
            <div class="flex flex-col relative w-64 h-full  ">
                <div class=" bg-gradient-to-t from-10% from-black to-transparent w-full h-full  absolute "></div>
                <div
                    class=" bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]  bg-cover  w-full h-full ">
                </div>
                <div class="w-full flex items-center p-3  absolute bottom-0 left-0 gap-3 ">
                    <img class="rounded-full border-2 border-borderColor  w-16 h-16" src="@/assets/Ellipse.png" alt="">
                    <h3 class="text-sm  text-white">
                        {{ cardData.title }}
                    </h3>
                </div>
            </div>
        </a>
    </div>
</template>

