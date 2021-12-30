export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Global route middleware
  router: {
    middleware: 'pages',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Loading component
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
      Draggable: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
