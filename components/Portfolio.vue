<template>
  <div class="">
    <div class="lg:hidden">
        <h3 class="py-8 font-heading font-bold text-2xl text-purple-800 text-center uppercase md:py-10">Portfolio</h3>

        <!-- CARD -->
        <section class="text-center hover:scale-105 transition ease-in-out delay-50 duration-300 ">
            <div class="px-6 flex justify-center">  
                <div class="bg-white dark:bg-[#0e131f] rounded-xl shadow-lg w-[25rem]">
                    <a href="https://rezajaber.dev/" target="_blank">
                        <img class="w-full object-contain rounded-t-lg cursor-pointer" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                    </a>

                    <div class="mt-4 px-4">
                        <a href="https://rezajaber.dev/" target="_blank" class="text-sm text-blue-500 uppercase">Rezejaber.dev</a>

                        <a href="https://rezajaber.dev/" target="_blank">
                            <h3 class="mt-1 font-heading font-bold text-lg text-gray-800 dark:text-white uppercase">
                                From me - For you
                            </h3>
                        </a>

                        <p class="mt-2 font-body text-sm text-gray-600 dark:text-gray-300">
                            The website you are on now. Actually the funny thing is, it was one of my first Nuxt3-Projects and I built it over time. Feels like a journey!
                        </p>
                    </div>

                    <!-- TECH STACK INFO -->
                    <div class="mt-4 flex justify-center space-x-4 ">
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/html.png" alt="HTML-Icon">
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/js.png" alt="CSS-Icon">
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/tailwind.png" alt="JavaScript-Icon">    
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/nuxt.png" alt="Tailwind-Icon"> 
                    </div>
                    

                    <!-- BUTTONS REDIRECT -->
                    <div class="mt-8 mb-2 pb-3 flex justify-center gap-6">
                    <a href="https://github.com/rezajaber/rezajaber.dev" target="_blank" class="flex gap-2 cursor-pointer">
                        <svg class="dark:fill-white dark:text-white cursor-pointer  hover:text-purple-700 hover:scale-150 transition ease-in-out delay-50 duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <p class="font-body font-semibold text-md text-black dark:text-gray-200">Code</p>
                    </a>

                    <a href="https://rezajaber.dev/" target="_blank" class="flex gap-2 cursor-pointer">
                        <svg class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg>
                        <p class="font-body font-semibold text-md text-black dark:text-gray-200">Demo</p>
                    </a>
                </div>
                </div>
            </div>
        </section>

        <!-- PAGE BUTTONS --> 
        <div class="flex justify-center pt-6 pb-8">
            <a href="#" class="px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </a>

            <a href="#" class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-purple-800 dark:hover:bg-purple-700 hover:text-white dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
    
    <!-- LARGE & XL & XXL -->
    <div class="hidden lg:block scale-75">
        <h3 class="py-8 font-heading font-bold text-2xl text-purple-800 text-center uppercase ">Portfolio</h3>

        <!-- CARD -->
        <section class="px-24 hover:scale-105 transition ease-in-out delay-50 duration-300 xl:w-[100rem] xl:mx-auto">
            <div class="px-6 flex justify-center">  
                <div class="bg-white dark:bg-[#0e131f] rounded-l-xl shadow-lg xl:flex xl:flex-col xl:justify-center xl:px-16">
                    <div class="mt-6 px-4 text-center">
                        <a href="https://rezajaber.dev/" target="_blank" class="text-sm text-blue-500 uppercase xl:text-lg ">Rezajaber.dev</a>

                        <a href="https://rezajaber.dev/" target="_blank">
                            <h3 class="mt-2 font-heading font-bold text-lg text-center text-gray-800 dark:text-white uppercase xl:text-2xl xl:pt-4">
                                From me - For you
                            </h3>
                        </a>

                        <p class="mt-4 font-body text-sm text-center text-gray-600 dark:text-gray-300 xl:text-lg xl:pt-2">
                            The website you are on now. Actually the funny thing is, it was one of my first Nuxt3-Projects and I built it over time. Feels like a journey!
                        </p>
                    </div>

                    <!-- TECH STACK INFO -->
                    <div class="mt-6 flex justify-center space-x-4 xl:space-x-6">
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 xl:w-16" src="../public/assets/pic/html.png" alt="HTML-Icon">
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 xl:w-16" src="../public/assets/pic/js.png" alt="CSS-Icon">
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 xl:w-16" src="../public/assets/pic/tailwind.png" alt="JavaScript-Icon">    
                        <img class="w-12 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300 xl:w-16" src="../public/assets/pic/nuxt.png" alt="Tailwind-Icon"> 
                    </div>
                    

                    <!-- BUTTONS REDIRECT -->
                    <div class="mt-8 mb-2 pb-5 flex justify-center gap-6 xl:gap-12 xl:mt-10">
                        <a href="https://github.com/rezajaber/rezajaber.dev" target="_blank" class="flex gap-2 cursor-pointer">
                            <svg class="dark:fill-white dark:text-white cursor-pointer hover:text-purple-700 hover:scale-150 transition ease-in-out delay-50 duration-300 xl:scale-150 xl:mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            <p class="font-body font-semibold text-md text-black dark:text-gray-200 xl:text-lg">Code</p>
                        </a>

                        <a href="https://rezajaber.dev/" target="_blank" class="flex gap-2 cursor-pointer">
                            <svg class="dark:fill-white xl:scale-150 xl:mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg>
                            <p class="font-body font-semibold text-md text-black dark:text-gray-200 xl:text-lg">Demo</p>
                        </a>
                    </div>
                </div>

                <a href="https://rezajaber.dev/" target="_blank">
                    <img class="h-full rounded-r-xl cursor-pointer" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                </a>
            </div>
        </section>

        <!-- PAGE BUTTONS --> 
        <div class="flex justify-center pt-10 pb-10">
            <a href="#" class="px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </a>

            <a href="#" class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-purple-800 dark:hover:bg-purple-700 hover:text-white dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
  </div>
</template>