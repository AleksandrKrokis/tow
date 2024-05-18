// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@nuxtjs/i18n', '@nuxt/content'],
  i18n: {
    locales: ['ee', 'en', 'ru'],
    defaultLocale: 'ee',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})
