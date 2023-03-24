<template>
    <div class="pt-8 px-5">
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
</template>

<style>
    @import '/assets/css/animation.css';
</style>

<script setup>
    import { getRezaAge } from '/lib/utils.js'
</script>