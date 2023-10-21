<script setup>
import { RouterView } from "vue-router";
import { reactive } from "vue";
import Header from "./views/components/header.vue";
import Footer from "./views/components/footer.vue";
import Loading from "./views/components/Loading.vue";
import { useLoadingStore } from "@/views/store/loading.js";
const LoadingStore = useLoadingStore();
const storeValue = reactive(LoadingStore);
</script>

<template>
  <div>
    <Loading v-if="storeValue.loadingRequest" />
    <main
      class="bg-black bg-[url('@/assets/logo-background.svg')] bg-no-repeat bg-center min-h-screen flex flex-col justify-between"
    >
      <Header class="h-20" />
      <div class="flex-1 flex flex-col justify-center">
        <RouterView />
      </div>
      <Footer class="h-20 w-full" />
    </main>
  </div>
</template>
