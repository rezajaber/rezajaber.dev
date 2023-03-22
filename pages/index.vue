<template>
    <div>
        <div class="bg-gray-100">
            <Intro />
            <TechStack />
        </div>

        <AboutMe />

        <div class="bg-gray-100">
            <Portfolio />
        </div>
    
        <Contact />
        
    </div>
</template>

<script setup>
    const isLightMode = useState('themeSwitch' )
</script>