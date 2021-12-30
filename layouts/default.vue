<template>
  <div class="h-screen w-screen">
    <!-- Aside -->
    <Aside />

    <!-- Navbar -->
    <Navigation />

    <!-- Body -->
    <div>
      <nuxt />
    </div>

    <!-- Footer -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ activePage: 'getActivePage' }),
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
