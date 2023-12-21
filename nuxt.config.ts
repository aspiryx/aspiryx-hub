// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-gtag',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: process.env.NUXT_GOOGLE_SITE_VERIFICATION
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
  components: [
    { path: "~/components", pathPrefix: false },
  ],
  css: [],
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
      Michroma: true,
    }
  }
})  
