<!-- eslint-disable vue/multi-word-component-names -->
<script  setup>
import router from '../../router';
import CardComponent from './components/CardComponent.vue';

const cardsData = [
  { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' },
  { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2' },
  { id: 3, title: 'Card 3', content: 'Conteúdo do Card 3' },
  { id: 4, title: 'Card 4', content: 'Conteúdo do Card 4' },
  { id: 5, title: 'Card 5', content: 'Conteúdo do Card 5' },
  { id: 6, title: 'Card 6', content: 'Conteúdo do Card 6' },
  { id: 7, title: 'Card 7', content: 'Conteúdo do Card 7' },
  { id: 8, title: 'Card 8', content: 'Conteúdo do Card 8' },
];
</script>

<template>
  <section class="p-4 mx-auto max-w-screen-xl h-screen max-xl:h-5/6 ">
    <div class=" flex flex-wrap justify-center items-center gap-8">
      <CardComponent v-for=" (card, index) in cardsData" :key="index" :cardData="card"
        @click="router.push({ name: 'scoltDetails', params: { id: card.id } })" />
    </div>
  </section>
</template>
