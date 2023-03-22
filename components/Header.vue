<template>
    <div>
        <nav class="relative bg-white dark:bg-gray-900 shadow">
            <div class="flex justify-between items-center px-4 py-2">
                <!-- LEFT SECTION -->
                <div @click="() => themeSwitch()" class="left-section">
                    <img v-if="isLightMode" class="w-6 cursor-pointer" src="../public/assets/pic/moon-icon.svg" alt="Darkmode-Icon-Moon">
                    <img v-if="!isLightMode" class="w-6 cursor-pointer" src="../public/assets/pic/sun-warm-icon.svg" alt="Lightmode-Icon-Sun">
                </div>

                <!-- CENTER -->
                <div class="flex items-center gap-x-6">
                    <div class="relative">
                        <img class="object-cover w-14 rounded-full" src="../public/assets/pic/memoji.png" alt="My Memoji">
                        <span class="absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
                    </div>
                </div>
                
                <!-- RIGHT SECTION -->
                <div>
                    <!-- Mobile menu button -->
                    <div class="flex md:hidden lg:hidden">
                        <button v-cloak @click="isOpen = !isOpen" type="button" class="text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                    
                            <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="text-black w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> 

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div v-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                        <div class="flex flex-col mr-2 -mx-4 md:flex-row md:py-0">
                            <a href="#" class="py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Home</a>
                            <a href="#" class="py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">About</a>
                            <a href="#" class="py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>        
    </div>
</template>

<script setup>
    const isOpen = ref(false)

    const isLightMode = useState('themeSwitch')

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
</script>