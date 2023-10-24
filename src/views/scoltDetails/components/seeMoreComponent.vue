<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})
console.log('aaa', props.data);
</script>
<template>
    <div class="flex flex-col bg-boxColor rounded  text-white max-xl:hidden p-1">
        <div class="h-full w-72 p-2">
            <h1 class=" text-center text-3xl mb-2">Veja também!</h1>
            <div class="overflow-hidden h-44">
                <img class="w-full h-full object-cover" :src="props.data.img" :alt="props.data.nome">
            </div>
            <p class=" text-center text-xl p-2">{{ props.data.nome }} </p>
        </div>
    </div>
</template>
