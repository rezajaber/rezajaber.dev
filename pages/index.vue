<template>
    <div>
        <div class="bg-gray-100 dark:bg-[#1e2022]">
            <Intro />
            <TechStack />
        </div>

        <div class="bg-white dark:bg-[#181a1b]">
            <AboutMe />
        </div>

        <div class="bg-gray-100 dark:bg-[#1e2022]">
            <Portfolio />
        </div>
        
        <div class="bg-white dark:bg-[#181a1b]">
            <Contact />
        </div>

        <div class="bg-gray-100 dark:bg-[#1e2022] sticky top-[100vh]">
            <Footer />
        </div>
    </div>
</template>

<script setup>
    const isLightMode = useState('themeSwitch')
</script>