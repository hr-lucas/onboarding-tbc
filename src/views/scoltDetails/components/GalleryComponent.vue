
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
            <div v-for="(img, index) in props.data" :key="index" class="w-full h-56 overflow-hidden  "
                v-viewer="{ movable: false }">
                <img v-if="img.tipo == 'image'" class="w-full h-full p-1 object-cover" :src="img.src" />
            </div>
        </div>
    </div>
</template>
