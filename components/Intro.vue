<template>
    <div class="pt-8 px-5 dark:bg-[#1e2022]">
        <div class="flex items-center flex-col">
            <p class="font-heading font-bold text-5xl dark:text-gray-200 text-center mb-1 ">Reza Jaber</p>
            <p class="font-heading font-bold text-3xl dark:text-gray-200 text-center mb-1">Front-End Developer</p>
            <img class="waving ml-2 w-14" src="../public/assets/pic/waving.png" alt="Waving-Hand">
        </div>

        <div class="pt-4 px-2 text-justify">
            <p class="font-body font-regular text-base dark:text-gray-200  tracking-wide leading-[1.625rem]">
                Hey, I'm Reza Jaber. A {{ getRezaAge() }} year old passionate Frontend-Developer based in Hamburg, Germany📍
            </p>
        </div>
    </div>
</template>

<style>
    @import '/assets/css/animation.css';
</style>

<script setup>
    import { getRezaAge } from '/lib/utils.js'
</script>