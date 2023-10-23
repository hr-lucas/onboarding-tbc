<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import 'viewerjs/dist/viewer.css'
const props = defineProps({
    feed: {
        type: Object,
        required: true,
    },
    info: {
        type: Object,
        required: true,
    },
})
let data = [
    {
        "id": 15,
        "author": "MarcelaTeste",
        "date": "2023-10-21 01:56:28",
        "conteudo": {
            "src": "https://multiplycompany.store/wp-content/uploads/2023/10/ccc_YD8nEGZvVyHDHp7NLd8i48W061G1bppI14KHWW9e-1.mp4",
            "tipo": "mp4",
            "description": "Marcela Fontanasdsdsdsdsd"
        },
        "total_comments": "0"
    },
    {
        "id": 15,
        "author": "MarcelaTeste",
        "date": "2023-10-21 01:56:28",
        "conteudo": {
            "src": "https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg",
            "tipo": "image",
            "description": "Marcela Fontanasdsdsdsdsd"
        },
        "total_comments": "0"
    }
]
console.log('feed', props.feed);
console.log('info', props.info);
</script>

<template>
    <div>
        <div class="border-1 border-t-[0px]  border-borderColor text-white p-4">
            <div id="feed-body" tabindex="-1" role="dialog" aria-hidden="false">
                <div class="feed" v-for="(feeds, index) of data" :key="index">
                    <div>
                        <div class="w-full">
                            <div class="flex p-2 mb-4 text-white text-center w-full">
                                <div
                                    class="rounded-full border-2 overflow-hidden border-borderColor w-16 h-16 flex items-center justify-center">
                                    >

                                    <img class=" w-full " :src="props.info.informacoes.foto_perfil"
                                        :alt="feeds.conteudo.description">
                                </div>
                                <div class=" flex justify-start flex-col">
                                    <h6 class=" text-base mt-2">{{ props.info.informacoes.nome }}</h6>
                                    <p class=" text-[#444]">{{ feeds.author }}</p>
                                </div>
                            </div>
                            <div v-if="feeds.conteudo.tipo == 'image'" class="overflow-hidden flex justify-center">
                                <img :src="feeds.conteudo.src" :alt="feeds.conteudo.description"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div v-if="feeds.conteudo.tipo == 'mp4'" class=" flex justify-center">
                                <video class="w-full h-full object-cover" controls>
                                    <source :src=feeds.conteudo.src type=video/webm>
                                    <source :src=feeds.conteudo.src type=video/ogg>
                                    <source :src=feeds.conteudo.src type=video/mp4>
                                    <source :src=feeds.conteudo.src type=video/3gp>
                                </video>
                            </div>
                        </div>
                        <div class="relative w-full h-[1px] bg-borderColor my-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
