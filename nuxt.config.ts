// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* app: { 
       pageTransition: {name: 'page', mode: 'out-in'}
    }, */
    css: ['/public/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })