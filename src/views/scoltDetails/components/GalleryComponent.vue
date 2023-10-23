
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import 'viewerjs/dist/viewer.css'
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})
setTimeout(() => {
    // eslint-disable-next-line no-undef, no-unused-vars
    const galery = new Viewer(document.getElementById("container"));
}, 100);
</script>

<template>
    <div class="flex">
        <div class="grid grid-cols-3 border-1 rounded border-borderColor w-full" id="container">
            <div class="  overflow-hidden  p-1 cursor-pointer " v-for="(img, index) in props.data" :key="index">
                <div class=" w-full h-full " v-if="img.tipo == 'image'" v-viewer="{ movable: false }">
                    <img class="w-full h-full object-cover" :src="img.src" />
                </div>
            </div>
        </div>
    </div>
</template>
