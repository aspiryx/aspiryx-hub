// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-gtag',
    '@vueuse/nuxt',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],

  imports: {
    dirs: ['stores']
  },

  app: {
    head: {
      titleTemplate: '%s / ASPIRYX',
      meta: [
        {
          name: 'google-site-verification',
          content: process.env.NUXT_GOOGLE_SITE_VERIFICATION
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }]
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
    { path: '~/components', pathPrefix: false },
    { path: '~/components/ui', prefix: 'Ui' }
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
  },

  compatibilityDate: '2023-12-16',
})