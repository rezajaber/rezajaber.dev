<template>
    <div v-if="loaded">
        <Header />
        
        <div class="flex flex-col min-h-screen">
            <slot/>
        </div>
    </div>
</template>

<script setup>
    const isIndex = useState('pageSwitch', () => true)
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