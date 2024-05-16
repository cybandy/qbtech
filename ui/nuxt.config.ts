// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  devServer: {
    port: 443,
    host: 'qbtech.local',
    https: {
      key: './ssl/qbtech.local-key.pem',
      cert: './ssl/qbtech.local.pem'
    }
  },
  modules: ["@nuxt/ui", "@nuxthub/core", "@nuxtjs/seo", "@nuxt/fonts"],
  hub: {
    database: true,
    // blob: true,
    kv: true
  },
  ogImage: {
    enabled: false
  },
  schemaOrg: {
    enabled: false
  },
  linkChecker: {
    enabled: false
  },
  seoExperiments: {
    enabled: false
  }
})