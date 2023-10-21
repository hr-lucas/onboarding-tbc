<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DescriptionComponent from "./components/DescriptionComponent.vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import seeMoreComponent from "./components/seeMoreComponent.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { api } from "@/ultils/services/services.js";
import { useLoadingStore } from "@/views/store/loading.js";
const LoadingStore = useLoadingStore();

const route = useRoute();

const ker = { id: 1, title: "Card 1", content: "Conteúdo do Card 1" };

onMounted(async () => {
  LoadingStore.loadingRequest = true;
  await get_info();
  await get_feed();
  LoadingStore.loadingRequest = false;
});

const get_info = async () => {
  await api
    .get(`/produto/${route.params.id}`)
    .then((res) => {
        // Lembrar de olhar quando vier com null ( nao tem info ) nao vai mostar as informacoes em tela vazia.
      console.log("info", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const get_feed = async () => {
  await api
    .get(`/photo/?_user=${route.params.id}`)
    .then((res) => {
    // Quando vier fazio nao mostra nada no feed
      console.log("feed", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <section class="p-2 mt-24 flex flex-wrap max-w-xx mx-auto min-h-screen">
    <div class="flex w-full gap-5 max-md:flex-wrap max-md:h-full">
      <div class="flex flex-col gap-4 w-80 max-md:w-full">
        <ProfileComponent :data="ker" />
        <div class="desktop max-md:hidden">
          <DetailsComponent />
        </div>
      </div>
      <div class="flex w-full gap-2 max-md:flex-col">
        <div class="flex flex-col gap-6 w-full">
          <DescriptionComponent />
          <GalleryComponent />
        </div>
        <div class="max-md:hidden">
          <seeMoreComponent />
        </div>
        <div class="mobile max-md:w-full md:hidden">
          <div class="p-2 text-white text-center border-borderColor border-t-2 h-40">
            <div class="flex w-full justify-center">
              <img
                class="h-24 w-24 rounded-full border-2 border-red-600"
                src="https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg"
                alt=""
              />
            </div>
            <h6 class="text-xl mt-2">Paula Teste</h6>
          </div>
          <DetailsComponent />
        </div>
      </div>
    </div>
    <section
      id="bottom-navigation"
      style="background-color: #151515"
      class="block fixed inset-x-0 bottom-0 z-10 border-t border-gray-800 shadow opacity-90 md:hidden"
    >
      <div class="flex justify-center ...">
        <div>
          <div class="flex flex-row">
            <div>
              <div>
                <img
                  class="rounded-full w-10 mt-2"
                  src="https://splove.com.br/storage/profile/e4691ae23e3f33cb69934ad7f9007727.jpg"
                />
              </div>
            </div>
            <div>
              <div wire:id="8t3twC9GU7pRmPU0ZRFX">
                <div wire:ignore="">
                  <a
                    wire:click.lazy="submit"
                    href="https://wa.me/5511992853907?text=Olá,%20te%20vi%20no%20SPLove!%20Gostaria%20de%20mais%20informações."
                    target="_blank"
                  >
                    <div
                      class="mt-2 mb-2 ml-2 pl-4 pr-4 pt-2 pb-2 rounded-full text-center"
                      style="background: #0c7b35"
                    >
                      <button type="submit" class="w-full">
                        <span class="text-white font-bold"> Conversar no WhatsApp </span>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
