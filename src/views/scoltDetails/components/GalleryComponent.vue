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
    <div class=" border-1 rounded border-gray-500 w-full ">
        <div class="flex flex-wrap w-full justify-center">
            <div v-for="img in images" :key="img.id" class=" w-72 h-96 p-3 cursor-pointer">

                <img class="h-full "
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
            </div>
        </div>
    </div>
</template>
