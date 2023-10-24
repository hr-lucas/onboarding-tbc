<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (numericPhoneNumber.length < 11) {
        return 'Número de telefone incompleto';
    }
    const formattedPhoneNumber = `+${numericPhoneNumber.slice(0, 2)} (${numericPhoneNumber.slice(2, 4)}) ${numericPhoneNumber.slice(4, 9)}-${numericPhoneNumber.slice(9)}`;
    return formattedPhoneNumber;
}
</script>

<template>
    <div class="flex flex-col w-80 h-44 bg-boxColor relative rounded text-white max-md:w-full">
        <div class="flex justify-center">
            <div class="flex w-24 h-full">
                <div
                    class="absolute bottom-28 left-5 h-24 w-24 rounded-full  overflow-hidden flex items-center justify-center">
                    <img class="w-full" :src="props.data?.informacoes?.foto_perfil" alt="">
                </div>
            </div>
            <div class="flex flex-col p-2">
                <h1 class="text-2xl">{{ props.data?.informacoes?.nome }}</h1>
                <div class="flex items-center">
                    <img class="w-3 h-3" src="@/assets/ig-icon.svg" />
                    <h2 class="text-1xl">{{ props.data.id }}</h2>
                </div>
            </div>
        </div>
        <div class="p-3 flex justify-center">
            <a wire:click.lazy="submit"
                :href="`https://wa.me/${props.data?.informacoes?.telefone}?text=Olá,%20te%20vi%20no%20TheBossClub!%20Gostaria%20de%20mais%20informações.`"
                target="_blank">
                <button class="bg-greenBtn h-full rounded p-3 text-2xl flex justify-center items-end w-72 font-bold">
                    <img class="h-6 mr-1" src="@/assets/wppIcon.svg" alt="">
                    <p class="m-0 text-xl">{{ formatPhoneNumber(props.data?.informacoes?.telefone) }}</p>
                </button>
            </a>
        </div>
        <h4 class="text-center text-sm">Fale com ela sem adicionar</h4>
    </div>
</template>
