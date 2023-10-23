<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})
</script>
<template>
    <div class=" border-1 rounded border-borderColor w-full h-64 text-white p-4">
        <h5>Descrição: {{ props.data.informacoes.descricao }} </h5>
    </div>
</template>
