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
    <div class=" grid grid-cols-3 border-1 rounded border-borderColor w-full ">
        <div class="p-1 cursor-pointer max-md:p-0.5 " v-for="img in images" :key="img.id">
            <a href="http://">
                <img class="w-64 h-72 max-lg:w-40 max-lg:h-44"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
            </a>
        </div>
    </div>
    <div id="glightbox-body" class="glightbox-container glightbox-clean" tabindex="-1" role="dialog" aria-hidden="false">
        <div class="gloader visible" style="display: none;"></div>
        <div class="goverlay"></div>
        <div class="gcontainer">
            <div id="glightbox-slider" class="gslider">
                <div class="gslide loaded current">
                    <div class="gslide-inner-content">
                        <div class="ginner-container" style="">
                            <div class="gslide-media gslide-image"><img
                                    src="https://splove.com.br/storage/img/653e69d521a5d3bfc190c11eb79a9f7a.jpg" alt=""
                                    class="">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="gslide loaded">
                    <div class="gslide-inner-content">
                        <div class="ginner-container" style="">
                            <div class="gslide-media gslide-image"><img
                                    src="https://splove.com.br/storage/img/1085837260ef9c71ef766bc170bb8e16.jpg" alt=""
                                    class="">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
