<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

const props = defineProps({
    data: {
        type: Object, // Tipo de dados que você espera receber
        required: true, // Obrigatório
    },
})
console.log("props", props.data);
</script>
<template>
    <div class="flex flex-col w-80 h-44 bg-boxColor relative rounded  text-white max-md:w-full ">

        <div class=" flex justify-center">
            <div class="flex w-28 h-full ">
                <img class="absolute bottom-28 left-5 h-24 w-24 rounded-full" src="@/assets/Ellipse.png" alt="">
            </div>
            <div class="flex flex-col p-2">
                <h1 class=" text-2xl">{{ props.data.title }}</h1>
                {{ props.data.content }}
            </div>
        </div>
        <div class="p-3 flex justify-center">
            <button class=" bg-greenBtn h-full rounded p-3  text-2xl flex justify-center items-end w-72 font-bold">
                <img class=" h-6 mr-1 " src="@/assets/wppIcon.svg" alt="">
                (99) 99999-99999
            </button>
        </div>
        <h4 class=" text-center text-sm">Fale com ela sem adicionar </h4>
    </div>
</template>
