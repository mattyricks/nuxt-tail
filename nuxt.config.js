export default {
  head: {
    title: "Matthew's Portfolio",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/css/tailwind',
    '~assets/scss/global',
    '~assets/scss/variables',
    '~assets/scss/mixins',
    'vue-preloaders/dist/vue-preloaders.css',
  ],
  components: true,
  router: {
    middleware: 'pages',
  },
  loading: {
    color: 'DodgerBlue',
    height: '100%',
    continuous: true,
    duration: 3,
    throttle: 0,
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      draggable: true,
      text: true,
    },
    extraEases: {
      expoScaleEase: true,
      roughEase: true,
    },
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-gsap-module',
  ],
  plugins: ['~plugins/preloaders.js'],
  build: {
    transpile: ['vue-preloaders'],
  },
}
