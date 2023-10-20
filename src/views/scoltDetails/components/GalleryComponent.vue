<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import 'viewerjs/dist/viewer.css'
let images = [
    { id: 1, img: 'https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg' },
    { id: 2, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { id: 3, img: 'https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg' },
    { id: 4, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { id: 5, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { id: 6, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' },
    { id: 7, img: 'https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg' },
];
let feed = [
    { id: 1, name: "Paula Teste", insta: '@evelynzain', type: 'jpg' },
    { id: 2, name: "Paula Teste2", insta: '@evelynzain', type: 'jpg' },
    { id: 3, name: "Paula Teste3", insta: '@evelynzain', type: 'mp4' },
];
setTimeout(() => {
    // eslint-disable-next-line no-undef
    const galery = new Viewer(document.getElementById("container"));
    console.log(galery);
}, 100);
</script>

<template>
    <div>
        <div class="grid grid-cols-3 border-1 rounded border-borderColor w-full" id="container">
            <div class="p-1 cursor-pointer max-md:p-0.5" v-for="img in images" :key="img.id">
                <div v-viewer="{ movable: false }">
                    <img class="w-64 h-72 max-lg:w-40 max-lg:h-44" :src="img.img" />
                </div>
            </div>
        </div>
        <div class="border-1 border-t-[0px]  border-borderColor text-white p-4">
            <div id="feed-body" tabindex="-1" role="dialog" aria-hidden="false">
                <div class="feed" v-for="feeds of feed" :key="feeds.id">
                    <div v-if="feeds.type == 'jpg'">
                        <div class="w-full">
                            <div class="flex p-2 mb-4 text-white text-center w-full">
                                <img class=" w-14 h-14 mr-2 rounded-full border-2 border-red-600"
                                    src="https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg" alt="">
                                <div class=" flex justify-start flex-col">
                                    <h6 class=" text-base mt-2">{{ feeds.name }}</h6>
                                    <p class=" text-[#444]">{{ feeds.insta }}</p>
                                </div>
                            </div>
                            <div class=" flex justify-center">
                                <img src="https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg" alt=""
                                    class="" />
                            </div>
                        </div>
                        <div class="relative w-full h-[1px] bg-borderColor my-5"></div>
                    </div>
                    <div v-if="feeds.type == 'mp4'">
                        <div class="w-full">
                            <div class="flex p-2 mb-4 text-white text-center w-full">
                                <img class=" w-14 h-14 mr-2 rounded-full border-2 border-red-600"
                                    src="https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg" alt="">
                                <div class=" flex justify-start flex-col">
                                    <h6 class=" text-base mt-2">{{ feeds.name }}</h6>
                                    <p class=" text-[#444]">{{ feeds.insta }}</p>
                                </div>
                            </div>
                            <div class=" flex justify-center">
                                <video width="630" controls>
                                    <source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm>
                                    <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg>
                                    <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
                                    <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
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
