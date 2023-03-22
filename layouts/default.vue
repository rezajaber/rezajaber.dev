<template>
    <div v-if="loaded">
        <Header />
        <div class="bg-gray-100 min-h-screen">
            <Intro />
            <Stack />
            <slot /> 
        </div>
    </div>
</template>

<script setup>
    const isLightMode = useState('themeSwitch', () => true)
    const loaded = ref(false)

    const checkTheme = () => {
        if (window.localStorage.getItem('theme') == 'dark') {
            document.documentElement.classList.add('dark')
            return false
        } 
        else {
            document.documentElement.classList.remove('dark')
            return true
        }
    }
    
    onBeforeMount(() => {
        isLightMode.value = checkTheme() 
    })

    onMounted(() => {
        loaded.value = true
    })
</script>