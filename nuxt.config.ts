// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-gtag'
  ],
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "1Qangw3-YZdtLUQPsTwPIA0YLB0Be3E12TxZ2bA2mVo"
        }
      ]
    }
  }
})  
