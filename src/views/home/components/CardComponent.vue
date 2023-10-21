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
    <div class="p-2">
        <div class="group block border-borderColor overflow-hidden justify-center w-64 h-96">
          <div class="flex flex-col relative w-64 h-full">
            <div class="bg-gradient-to-t from-2% from-black to-transparent w-full h-full absolute"></div>
            <div class="w-full h-full">
              <img
                class="w-full h-full object-cover"
                loading="lazy"
                :src="cardData.thumbnail"
                :alt="cardData.nome"
              />
            </div>
            <div class="w-full flex items-center justify-center p-3 absolute bottom-0 left-0 gap-3">
              <div
                class="rounded-full border-2 overflow-hidden border-borderColor w-16 h-16 flex items-center justify-center"
              >
                <img class="w-full" :src="cardData.foto_perfil" loading="lazy" alt="" />
              </div>
              <h3 class="text-sm text-white">
                {{ cardData.nome }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      
</template>
