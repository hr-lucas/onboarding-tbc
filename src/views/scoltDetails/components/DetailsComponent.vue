<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})
let show2 = ref(false);

</script>

<template>
    <div class="bg-boxColor rounded text-white max-md:w-full mb-4 p-4 ">

        <div key="content" class="flow-root  my-3 shadow-sm">
            <dl class="text-lg">
                <dt class="mb-3">
                    <b class="font-medium">Nome:</b> {{ props.data.informacoes.nome }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Idade:</b> {{ props.data.informacoes.idade }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Tipo:</b> {{ props.data.informacoes.tipo }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Biotipo:</b> {{ props.data.informacoes.altura }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Altura:</b> {{ props.data.informacoes.altura }}
                </dt>

                <dt class="mb-3">
                    <b class="font-medium">Manequim:</b> {{ props.data.informacoes.maniquim }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Pés:</b> {{ props.data.informacoes.pes }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Cabelos:</b> {{ props.data.informacoes.cabelos }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Olhos:</b> {{ props.data.informacoes.olhos }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Horario:</b> {{ props.data.informacoes.horario }}
                </dt>
                <dt class="mb-3">
                    <b class="font-medium">Faz o perfil:</b> {{ props.data.informacoes.faz_perfil || 'N/A' }}
                </dt>
            </dl>
        </div>

    </div>
    <div class="bg-boxColor rounded text-white max-md:w-full p-4  ">
        <button @click="show2 = !show2; show = false"
            class="w-full group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:border-borderColor text-xl">
            <span class="flex items-center justify-between w-full font-medium transition-colors   group-active:text-white">
                Mais Detalhes <i :class="{ up: show2, down: !show2 }" class="arrow "></i>
            </span>
        </button>
        <div v-if="show2 && !show" key="content" class="flow-root  my-3 shadow-sm">
            <div key="content" class="flow-root  my-3 shadow-sm">
                <dl class="text-lg">
                    <dt class="mb-3">
                        <b class="font-medium">Acompanha:</b> {{ props.data.informacoes.acompanha }}
                    </dt>
                    <dt class="mb-3">
                        <b class="font-medium">Atendo em:</b> {{ props.data.informacoes.atende }}
                    </dt>
                    <dt class="mb-3">
                        <b class="font-medium">Cachê:</b> {{ props.data.informacoes.cartao || 'N/A' }}
                    </dt>
                    <dt class="mb-3">
                        <b class="font-medium">Período:</b> {{ props.data.informacoes.periodo || 'N/A' }}
                    </dt>
                    <dt class="mb-3">
                        <b class="font-medium">Especialidades:</b> {{ props.data.informacoes.especialidades || 'N/A' }}
                    </dt>
                    <dt class="mb-3">
                        <b class="font-medium">Permite Fumar:</b> {{ props.data.informacoes.fumante ? 'Sim' : 'Não' }}
                    </dt>
                    <dt class="mb-3">
                        <b class="font-medium">Viaja:</b> {{ props.data.informacoes.viaja ? 'Sim' : 'Não' }}
                    </dt>
                </dl>
            </div>
        </div>
    </div>
</template>
