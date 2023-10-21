<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from "../../router";
import CardComponent from "./components/CardComponent.vue";
import { onMounted, ref } from "vue";
import { api } from "@/ultils/services/services.js";
import { useLoadingStore } from "@/views/store/loading.js";
const LoadingStore = useLoadingStore();
// const storeValue = reactive(LoadingStore);
const listScot = ref(null);
onMounted(async () => {
  LoadingStore.loadingRequest = true;
  await api
    .get("/produto")
    .then((res) => {
      listScot.value = res.data;
      LoadingStore.loadingRequest = false;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <section class="p-1 mx-auto max-w-xx">
    <h1 class="text-white text-2xl font-bold text-center mb-5">
      Acompanhantes
    </h1>
    <div class="flex flex-wrap justify-center items-center">
      <CardComponent
        class="cursor-pointer"
        v-for="(card, index) in listScot"
        :key="index"
        :cardData="card"
        @click="router.push({ name: 'scoltDetails', params: { id: card.id } })"
      />
    </div>
  </section>
</template>
