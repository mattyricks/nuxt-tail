<template>
  <div class="">
    <header class="py-3 pl-5">
      <Navigation />
    </header>

    <aside>
      <Aside />
    </aside>

    <aside>
      <RightAside />
    </aside>

    <div class="mx-auto">
      <nuxt />
    </div>
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

<style lang="scss">
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);

  .svg-icon {
    fill: #121212;
  }
}
.dark-mode body {
  background-color: #121212;
  color: #fff;

  .svg-icon {
    fill: #fff;
  }
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;

  .svg-icon {
    fill: #433422;
  }
}
</style>
