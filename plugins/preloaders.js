import Vue from 'vue'
import VuePreloaders from 'vue-preloaders'

Vue.use(VuePreloaders, {
  loaders: {
    squareLoader: {
      container: '#app',
      overlayStyle: { backgroundColor: '#121212' },
    },
  },
})
