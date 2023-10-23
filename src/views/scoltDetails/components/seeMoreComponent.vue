<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})
console.log(props.data);
</script>
<template>
    <div class="flex flex-col bg-boxColor rounded  text-white max-xl:hidden p-1">
        <div class="h-full  w-72 ">
            <h1 class=" text-center text-3xl">Veja também!</h1>
            <div class="flex justify-center h-64">
                <img class="h-full" src="https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg" alt="">
            </div>
            <p class=" text-center text-xl p-2">Pietra Rut </p>
        </div>
    </div>
</template>
