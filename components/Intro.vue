<template>
    <div class="pt-8 px-5">
        <!-- SMALL & MEDIUM-->
        <div class="lg:hidden">
            <div class="flex flex-col items-center">
                <p class="font-heading font-bold text-5xl text-center mb-1 dark:text-gray-200">Reza Jaber</p>
                <p class="font-heading font-bold text-3xl text-center mb-1 dark:text-gray-200">Front-End Developer</p>
                <img class="waving w-14" src="/assets/pic/waving.png" alt="Waving-Hand">
            </div>

            <div class="pt-4 px-2 sm:px-20">
                <p class="font-body font-regular text-base text-justify tracking-wide leading-[1.625rem] dark:text-gray-200 ">
                    Hey, I'm Reza Jaber. A {{ getRezaAge() }} year old passionate Frontend-Developer based in Hamburg, Germany📍
                </p>
            </div>
        </div>


        <!-- LARGE & XL & XXL-->
        <div class="hidden lg:px-10 lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center">
            <!-- LEFT COINTAINER -->
            <div class="flex flex-col col-span-2">
                <p class="font-heading font-bold text-5xl mb-[4px] dark:text-gray-200">Hi, I'm Reza Jaber</p>

                <div class="flex items-center">
                    <p class="font-heading font-bold text-3xl mb-1 dark:text-gray-200">Front-End Developer</p>
                    <img class="waving w-10 -mt-3 ml-3" src="/assets/pic/waving.png" alt="Waving-Hand">
                </div>

                <div class="py-5">
                    <p class="pb-7 font-body font-regular text-base text-justify tracking-wide leading-[1.625rem] dark:text-gray-200 ">
                        Hey, I'm Reza Jaber. A {{ getRezaAge() }} year old passionate Frontend-Developer based in Hamburg, Germany📍 Currently I am working with following technologies:
                    </p>

                    <div class=" lg:flex lg:gap-8">
                        <div class="flex space-x-4 lg:space-x-8">
                            <img class=" w-[4rem] bg-white dark:bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 sm:w-[4.5rem] md:w-[5rem] lg:w-[4rem]" src="/assets/pic/html.png" alt="HTML-Icon">
                            <img class=" w-[4rem] bg-white dark:bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 sm:w-[4.5rem] md:w-[5rem] lg:w-[4rem]" src="/assets/pic/css.png" alt="CSS-Icon">
                            <img class=" w-[4rem] bg-white dark:bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 sm:w-[4.5rem] md:w-[5rem] lg:w-[4rem]" src="/assets/pic/js.png" alt="JavaScript-Icon">    
                            <img class=" w-[4rem] bg-white dark:bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 sm:w-[4.5rem] md:w-[5rem] lg:w-[4rem]" src="/assets/pic/tailwind.png" alt="Tailwind-Icon"> 
                        </div>

                        <div class="flex space-x-4 lg:space-x-8">
                            <img class=" w-[4rem] bg-white dark:bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 sm:w-[5rem] md:w-[4.5rem] lg:w-[4rem]" src="/assets/pic/vue.png" alt="Vue-Icon">
                            <img class=" w-[4rem] bg-white dark:bg-gray-100 rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 sm:w-[5rem] md:w-[4.5rem] lg:w-[4rem]" src="/assets/pic/nuxt.png" alt="Nuxt-Icon">
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIGHT COINTAINER -->
            <img class="w-full pb-6" src="/assets/pic/rezajaber-memoji.png" alt="Reza Jaber - Memoji">

            
        </div>

        
    </div>
</template>

<style>
    @import '/assets/css/animation.css';
</style>

<script setup>
    import { getRezaAge } from '/lib/utils.js'
</script>