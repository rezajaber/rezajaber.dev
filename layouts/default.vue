<template>
    <div v-if="loaded">
        <Header />
        
        <div class="flex flex-col min-h-screen">
            <slot />
            <div class="bg-gray-100 sticky top-[100vh]">
                <Footer />
            </div>
        </div>
    
        
    </div>
</template>

<script setup>
import { withBase } from 'ufo';

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