import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ['@nuxt-modules/algolia', {
      apiKey: '<YOUR_SEARCH_API_KEY>',
      applicationId: '<YOUR_APPLICATION_ID>'
    }]
  ],
})
