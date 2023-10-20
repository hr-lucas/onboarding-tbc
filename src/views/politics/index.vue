<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import pdf1 from '@/assets/POLÍTICA DE PRIVACIDADE e USO DE DADOS PESSOAIS SITE.pdf'
import pdf2 from '@/assets/TERMOS E CONDIÇÕES DE USO SITE Geral.pdf'
import pdf3 from '@/assets/TERMOS E CONDIÇÕES DE USO E ADESÃO SITE Anunciante.pdf'
const route = useRoute();
console.log("Router -> ", route.params);
const d1 = ref(pdf1);
const d2 = ref(pdf2);
const d3 = ref(pdf3);
</script>
<template>
    <section class=" p-2 mt-24 flex flex-wrap max-w-xx  mx-auto min-h-screen text-white ">
        <div class="flex flex-col gap-3 w-full items-center">
            <h1 class="text-2xl">Politicas de privacidade</h1>
            <a class="w-96 bg-boxColor text-white border-1 border-border-borderColor p-4 rounded text-center " :href="d1"
                download>TERMOS E CONDIÇÕES
                DE USO DO SITE</a>
            <a class="w-96 bg-boxColor text-white border-1 border-border-borderColor p-4 rounded text-center " :href="d2"
                download>USO DE DADOS PESSOAIS</a>
            <a class="w-96 bg-boxColor text-white border-1 border-border-borderColor p-4 rounded text-center " :href="d3"
                download>USO E ADESÃO
                ANUNCIANTE</a>
        </div>
    </section>
</template>
