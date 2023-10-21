<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pulsating-container flex justify-center items-center gap-7 flex-col text-white">
    <div class="pulsating-element"></div>
    <p class=" text-base font-bold ">Carregando informações</p>
  </div>
</template>

<style scoped>
.pulsating-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden !important ;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.712);
  z-index: 2000;
}

.pulsating-element {
  width: 150px;
  height: 150px;
  background: url('@/assets/logo-background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: pulsate 2s infinite;
}

/* Animação de pulsação */
@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    transform: rotate3d(0, 0, 120 , 180deg);
  }
  100% {
    transform: scale(1);
  }
}
</style>
