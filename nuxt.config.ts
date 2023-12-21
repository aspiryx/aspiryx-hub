// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-gtag',
    '@vueuse/nuxt',
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
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: "/logo.svg" }]
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
