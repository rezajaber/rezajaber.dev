<template>
  <div>
    <h3
      class="font-heading text-2xl font-bold text-purple-800 uppercase text-center pt-8"
    >
      Contact
    </h3>
    <p class="text-center font-body text-lg font-bold text-black mt-2">
      How do you like my Website?
      <br>Hit me up 🤙🏻
    </p>

    <section>
      

      <div class="mt-8 lg:w-1/2 lg:mx-6">
        <div
          class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50"
        >
          <h1 class="text-lg font-medium text-gray-700">
            I would love to hear your Feedback!
          </h1>

          <form class="mt-6">
            <div class="flex-1">
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Full Name</label
              >
              <input
                type="text"
                placeholder="John Doe"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Email address</label
              >
              <input
                type="email"
                placeholder="johndoe@example.com"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="w-full mt-6">
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Message</label
              >
              <textarea
                class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-700 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
            >
              get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
