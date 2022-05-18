import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/algolia', {
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      applicationId: process.env.ALGOLIA_APP_ID,
    }]
  ],
})
