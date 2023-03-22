<template>
  <div>
    <h3 class="font-heading text-2xl font-bold text-purple-800 uppercase text-center py-8">Portfolio</h3>

    <!-- CARD -->
    <section class="text-center hover:scale-105 transition ease-in-out delay-50 duration-300">
        <div class="flex justify-center px-6 mx-auto">  
            <div class="bg-white p-4 rounded-xl shadow-lg w-[25rem]">
                <a href="https://rezajaber.dev/" target="_blank">
                    <img class="cursor-pointer object-cover w-full rounded-lg" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                </a>

                <div class="mt-4 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <a href="https://rezajaber.dev/" target="_blank" class="text-sm text-blue-500 uppercase">Rezejaber.dev</a>

                    <a href="https://rezajaber.dev/" target="_blank">
                        <h3 class="block mt-1 text-lg font-bold text-gray-800 dark:text-white uppercase">
                            From me - For you
                        </h3>
                    </a>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 md:text-sm">
                        The website you are on now. Actually the funny thing is, it was one of my first Nuxt3-Projects and I built it over time. Feels like a journey!
                    </p>
                </div>

                <!-- TECH STACK INFO -->
                <div class="flex justify-center space-x-4 mt-4">
                    <img class=" w-14 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/html.png" alt="HTML-Icon">
                    <img class=" w-14 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/js.png" alt="CSS-Icon">
                    <img class=" w-14 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/tailwind.png" alt="JavaScript-Icon">    
                    <img class=" w-14 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300" src="../public/assets/pic/nuxt.png" alt="Tailwind-Icon"> 
                </div>
                

                <!-- BUTTONS REDIRECT -->
                <div class="flex justify-center mt-8 mb-2 gap-6">
                  <a href="https://github.com/rezajaber/rezajaber.dev" target="_blank" class="flex justify-center items-center gap-2 cursor-pointer">
                      <img class="w-6" src="assets/pic/github-mark.svg" alt="Github-Icon">
                      <p class="font-body text-black text-md font-semibold">Code</p>
                  </a>

                  <a href="https://rezajaber.dev/" target="_blank" class="flex justify-center items-center gap-2 cursor-pointer">
                      <img class="w-6" src="assets/pic/share.png" alt="Github-Icon">
                      <p class="font-body text-black text-md font-semibold">Demo</p>
                  </a>
              </div>
            </div>
        </div>
    </section>

    <!-- PAGE BUTTONS --> 
    <div class="flex justify-center pt-6 pb-8">
      <a href="#" class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
      </a>

      <a href="#" class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-purple-800 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
      </a>
    </div>
  </div>
</template>