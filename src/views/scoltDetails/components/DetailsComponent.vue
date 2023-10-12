<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
let show = ref(true);
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
    <div class="bg-boxColor rounded h-full text-white">

        <button @click="show = !show"
            class=" mb-4 w-full group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-transparent border-b-1 ">
            <span class="font-medium transition-colors group-hover:text-black group-active:text-white">
                Perfil
            </span>
        </button>
        <transition name="fade" mode="out-in">
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
        </transition>

        <button @click="show2 = !show2"
            class=" mb-4 w-full group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-transparent border-b-1"
            href="/download">
            <span class="font-medium transition-colors group-hover:text-black group-active:text-white">
                Atendimento
            </span>
        </button>
        <transition name="fade" mode="out-in">
            <div v-if="show2" key="content" class="flow-root  y-3 shadow-sm">
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
        </transition>
    </div>
</template>
