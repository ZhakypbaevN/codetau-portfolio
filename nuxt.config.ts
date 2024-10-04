// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'public/assets/scss/Variables.scss',
    'public/assets/scss/Normalize.scss',
    'public/assets/scss/Landing.scss',
    'public/assets/scss/Helpers.scss',
    'public/assets/fonts/Unbounded/stylesheet.css',
    'public/assets/fonts/Roboto/stylesheet.css'
  ],

  modules: ['@nuxtjs/i18n'],
  plugins: [
    '@/plugins/directives.ts'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  components: {
    global: true,
    dirs: ['@/components/common']
  },
})