<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
let show = ref(false);
let show2 = ref(false);

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
</style>
<template>
    <div class="bg-boxColor rounded h-full text-white max-md:w-full">

        <button @click="show = !show; show2 = false"
            class=" mb-4 w-full group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-transparent border-b-1 ">
            <span class="font-medium transition-colors group-hover:text-black group-active:text-white">
                Perfil
            </span>
        </button>
        <div v-if="show" key="content" class="flow-root  y-3 shadow-sm">
            <dl class="-my-3 divide-y divide-gray-100 text-sm">
                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Title</dt>
                    <dd class=" sm:col-span-2">Mr</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Name</dt>
                    <dd class=" sm:col-span-2">John Frusciante</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Occuputation</dt>
                    <dd class=" sm:col-span-2">Guitarist</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Salary</dt>
                    <dd class=" sm:col-span-2">$1,000,000+</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Bio</dt>
                    <dd class=" sm:col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
                        debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
                        quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
                        aliquam soluta architecto?
                    </dd>
                </div>
            </dl>
        </div>

        <button @click="show2 = !show2; show = false"
            class=" mb-4 w-full group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-transparent border-b-1"
            href="/download">
            <span class="font-medium transition-colors group-hover:text-black group-active:text-white">
                Atendimento
            </span>
        </button>
        <div v-if="show2 && !show" key="content" class="flow-root  y-3 shadow-sm">
            <dl class="-my-3 divide-y divide-gray-100 text-sm">
                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Title</dt>
                    <dd class=" sm:col-span-2">Mr</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Name</dt>
                    <dd class=" sm:col-span-2">John Frusciante</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Occuputation</dt>
                    <dd class=" sm:col-span-2">Guitarist</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Salary</dt>
                    <dd class=" sm:col-span-2">$1,000,000+</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium ">Bio</dt>
                    <dd class=" sm:col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
                        debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
                        quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
                        aliquam soluta architecto?
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>
