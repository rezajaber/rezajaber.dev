<template>
    <div>
        <nav class="shadow bg-white dark:bg-[#181a1b]">
            <div class="px-5 py-2 flex justify-between items-center md:px-6 lg:py-4">
                <!-- LEFT SECTION -->
                <div @click="() => themeSwitch()" class="left-section hover:animate-bounce">
                    <img v-if="isLightMode" class="w-6 cursor-pointer md:w-8 lg:w-10" src="/assets/pic/moon-icon.svg" alt="Darkmode-Icon-Moon">
                    <img v-if="!isLightMode" class="w-6 cursor-pointer md:w-8 lg:w-10" src="/assets/pic/sun-warm-icon.svg" alt="Lightmode-Icon-Sun">
                </div>

                <!-- CENTER -->
                <div class="flex items-center gap-x-6">
                    <div @click="() => switchPage()" class="relative">
                        <img class="hover:animate-spin object-cover w-14 rounded-full cursor-pointer" src="/assets/pic/memoji.png" alt="My Memoji">
                        <span class="absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
                    </div>
                </div>
                
                <!-- RIGHT SECTION -->
                <div>
                    <a href="https://open.spotify.com/playlist/2othQoW6WRJCnC7mKFMRgD?si=35aa1dfbec114733" target="_blank">
                        <img class="hover:animate-bounce w-7 hover:scale md:w-8 lg:w-10" src="/assets/pic/spotify.svg" alt="Spotify-Icon">
                    </a>
                </div>
            </div>
        </nav>        
    </div>
</template>

<style>
    @import '/assets/css/animation.css';
</style>

<script setup>
    const isLightMode = useState('themeSwitch')
    const router = useRouter()

    const themeSwitch = () => {
        document.documentElement.classList.toggle('dark')

        if (isLightMode.value) {
            isLightMode.value = false
            window.localStorage.setItem('theme', 'dark')
        } else {
            isLightMode.value = true
            window.localStorage.setItem('theme', 'light')
        }
    }

    
    const isIndex = useState('pageSwitch')
    
    const switchPage = () => {
        isIndex.value = !isIndex.value

        if (isIndex.value) {
            router.push("/application")
        } else {
            router.push("/")
        } 
    } 
</script>

