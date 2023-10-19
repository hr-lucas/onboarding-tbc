<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
let show = ref(false);
let show2 = ref(false);
// let show3 = ref(false);

</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}

.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>
<template>
    <div class="bg-boxColor rounded text-white max-md:w-full mb-4 p-4 ">

        <div key="content" class="flow-root  y-3 shadow-sm">
            <dl class="-my-3 pt-6  text-lg">
                <dt class=" mb-3">
                    <b class="font-medium">Bairro: </b> Itami Bibi
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Idade:</b> 23
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Tipo: </b>Loira
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Biotipo: </b>sarada
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Altura: </b>1.58
                </dt>

                <dt class=" mb-3">
                    <b class="font-medium">Manequim: </b>38
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Pés: </b>35
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Cabelos: </b>Loiros
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Olhos: </b>Castanhos
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Horario: </b>24h
                </dt>
                <dt class=" mb-3">
                    <b class="font-medium">Faz o perfil: </b>Namoradinha Universitária
                </dt>
            </dl>
        </div>


    </div>
    <div class="bg-boxColor rounded text-white max-md:w-full ">
        <button @click="show2 = !show2; show = false"
            class="w-full group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:border-borderColor text-xl">
            <span class="flex items-center justify-between w-full font-medium transition-colors   group-active:text-white">
                Mais Detalhes <i :class="{ up: show2, down: !show2 }" class="arrow "></i>
            </span>
        </button>
        <div v-if="show2 && !show" key="content" class="flow-root  y-3 shadow-sm">
            <div key="content" class="flow-root  y-3 shadow-sm">
                <dl class="-my-3 p-4 pt-6  text-lg">
                    <dt class=" mb-3">
                        <b class="font-medium">Acompanha: </b> Homens, Mulheres, Casais
                    </dt>
                    <dt class=" mb-3">
                        <b class="font-medium">Atendo em: </b> Flat Próprio, Motéis, Hotéis, Eventos, Apartamentos, Casa,
                        Escritórios, Casas de swing
                    </dt>
                    <dt class=" mb-3">
                        <b class="font-medium">Cachê: </b>A combinar
                    </dt>
                    <dt class=" mb-3">
                        <b class="font-medium">Periodo: </b>A combinar
                    </dt>
                    <dt class=" mb-3">
                        <b class="font-medium">Especialidades: </b>Striptease, Pompoarismo, SadoMasoquismo, Dominação,
                        Massagem Tântrica, Massagem Relaxante
                    </dt>

                    <dt class=" mb-3">
                        <b class="font-medium">Permite Fumar: </b>Sim
                    </dt>
                    <dt class=" mb-3">
                        <b class="font-medium">Viaja: </b>Sim
                    </dt>

                </dl>
            </div>
        </div>
    </div>
</template>
