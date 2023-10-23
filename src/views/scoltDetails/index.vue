<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DescriptionComponent from "./components/DescriptionComponent.vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import seeMoreComponent from "./components/seeMoreComponent.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { api } from "@/ultils/services/services.js";
import { useLoadingStore } from "@/views/store/loading.js";
import FeedComponent from "./components/FeedComponent.vue";

const LoadingStore = useLoadingStore();
const route = useRoute();
let infos = {};
let infos2 = null;

const isLoading = ref(false);

onMounted(async () => {
  LoadingStore.loadingRequest = true;
  await get_info();
  await get_feed();

  LoadingStore.loadingRequest = false;
  isLoading.value = true;
});
const get_info = async () => {
  await api
    .get(`/produto/${route.params.id}`)
    .then((res) => {
      // Lembrar de olhar quando vier com null ( nao tem info ) nao vai mostar as informacoes em tela vazia.
      if (res)
        return infos = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const get_feed = async () => {
  await api
    .get(`/photo/?_user=${route.params.id}`)
    .then((res) => {
      if (res)
        return infos2 = res.data;
      // return 'JSON com dados sem info'
      // Quando vier fazio nao mostra nada no feed
      //console.log("feed", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <section v-if="isLoading" class="p-2 mt-24 flex flex-wrap max-w-xx mx-auto min-h-screen">
    <div class="flex w-full gap-5 max-md:flex-wrap max-md:h-full">
      <div class="flex flex-col gap-4 w-80 max-md:w-full">
        <ProfileComponent :data="infos" />
        <div class="desktop max-md:hidden">
          <DetailsComponent :data="infos" />
        </div>
      </div>
      <div class="flex w-full gap-2 max-md:flex-col">
        <div class="flex flex-col gap-6 w-full">
          <DescriptionComponent :data="infos" />
          <GalleryComponent :data="infos.fotos" />
          <FeedComponent :info="infos" :feed="infos2" />
        </div>
        <div class="max-md:hidden">
          <seeMoreComponent :info="infos" />
        </div>
        <div class="mobile max-md:w-full md:hidden">
          <div class="p-2 text-white text-center border-borderColor border-t-2 h-40">
            <div class="flex w-full justify-center">
              <div class=" h-24 w-24 rounded-full  overflow-hidden flex items-center justify-center">
                <img class="w-full" :src="infos.informacoes.foto_perfil" :alt="infos.informacoes.nome" />
              </div>
            </div>
            <h6 class="text-xl mt-2">{{ infos.informacoes.nome }}</h6>
          </div>
          <DetailsComponent :data="infos" />
        </div>
      </div>
    </div>
    <section id="bottom-navigation" style="background-color: #151515"
      class="block fixed inset-x-0 bottom-0 z-10 border-t border-gray-800 shadow opacity-90 md:hidden">
      <div class="flex justify-center items-center mb-2">
        <div class="flex flex-row  justify-center items-center">
          <div
            class="rounded-full border-2 overflow-hidden border-borderColor w-16 h-16 flex items-center justify-center">

            <img class=" w-full " :src="infos.informacoes.foto_perfil" />
          </div>
          <div wire:id="8t3twC9GU7pRmPU0ZRFX">
            <div wire:ignore="">
              <a wire:click.lazy="submit"
                :href="`https://wa.me/${infos?.informacoes?.telefone}?text=Olá,%20te%20vi%20no%20SPLove!%20Gostaria%20de%20mais%20informações.`"
                target="_blank">
                <div class="mt-2 mb-2 ml-2 pl-4 pr-4 pt-2 pb-2 rounded-full text-center" style="background: #0c7b35">
                  <button type="submit" class="w-full">
                    <span class="text-white font-bold"> Conversar no WhatsApp </span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
