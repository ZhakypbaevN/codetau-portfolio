// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'CodeTau - Разработка кастомных IT-решений',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/assets/favicon/favicon-96x96.png',
          sizes: '96x96'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/assets/favicon/favicon.svg'
        },
        {
          rel: 'shortcut icon',
          href: '/assets/favicon/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/assets/favicon/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ],
      meta: [
        {
          name: 'apple-mobile-web-app-title',
          content: 'CodeTau'
        },
        {
          name: 'description',
          content: 'CodeTau - IT-компания, специализирующаяся на разработке кастомных программных решений для бизнеса. Мы создаем веб-сайты, мобильные приложения, корпоративные системы, интегрируем ИИ и облачные решения, чтобы ваш бизнес работал эффективно и современно.'
        },
        {
          name: 'keywords',
          content: 'CodeTau, IT компания, разработка на заказ, кастомное ПО, мобильные приложения, веб-сайты, корпоративные системы, CRM, ERP, SaaS, бизнес-решения, автоматизация, ИИ, облачные технологии, разработка программного обеспечения, digital трансформация'
        },
        {
          property: 'og:title',
          content: 'CodeTau - Эксперт в разработке кастомных IT-решений'
        },
        {
          property: 'og:description',
          content: 'CodeTau предлагает разработку под заказ: веб-сайты, мобильные приложения, облачные решения и корпоративные системы. Мы помогаем вашему бизнесу развиваться, создавая инновационные IT-продукты.'
        }
      ]
    }
  },
  css: [
    'public/assets/scss/Variables.scss',
    'public/assets/scss/Normalize.scss',
    'public/assets/scss/Landing.scss',
    'public/assets/scss/Helpers.scss',
    'public/assets/fonts/Unbounded/stylesheet.css',
    'public/assets/fonts/Roboto/stylesheet.css',
  ],
  modules: [
    '@nuxtjs/i18n'
  ],
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