<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
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
function redirectTodetails(id) {
  console.log(id);

}


</script>

<template>
  <main class="pt-9">
    <div class="mx-auto flex flex-wrap max-w-screen-xl justify-center items-center gap-8">
      <CardComponent v-for="(card, index) in cardsData" :key="index" :cardData="card" v-on:click="redirectTodetails(card.id)" />
    </div>
  </main>
</template>
