<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
let images = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 4 },
    { id: 4 },
    { id: 4 },
    { id: 4 },
    { id: 4 },
]
</script>
<template>
    <!-- class=" w-56 h-86  max-md:w-32 max-md:h-52 "> -->
    <div class=" grid grid-cols-3 border-1 rounded border-borderColor w-full ">
        <div class="p-1 cursor-pointer max-md:p-0.5 " v-for="img in images" :key="img.id">
            <a href="http://">
                <img class="w-64 h-72 max-lg:w-40 max-lg:h-44"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
            </a>
        </div>
    </div>
</template>
