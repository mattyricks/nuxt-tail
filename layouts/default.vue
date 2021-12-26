<template>
  <div class="mx-auto" style="transition: background-color 0.5s">
    <div
      :class="{
        'bg-green-200': activePage === 'index',
        'bg-pink-200': activePage === 'about',
        'bg-indigo-200': activePage === 'contact',
        'bg-blue-200': activePage === 'slides',
        'bg-gray-200': activePage === 'gsap',
      }"
    ></div>
    <!-- Sidebar -->
    <aside
      class="h-screen fixed left-0 top-0 flex items-center xl:w-36 lg:w-32 md:w-24 sm:w-16 w-12"
    >
      <a
        href=""
        class="w-full block h-10 text-center mt-8 transition-all ease-in-out opacity-0 transform translate-y-7"
      >
        <img
          class="h-10"
          :src="images.imageThree"
          alt="Matthew Ricklefs Logo"
        />
      </a>

      <ul
        class="flex flex-row justify-center items-center w-full block leading-normal m-0 mt-36 -ml-2 p-0 transform -rotate-90 origin-center left-1/2 top-1/2 text-center"
      >
        <li class="text-sm p-2">
          <a href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/">
            LINKEDIN
          </a>
        </li>

        <li class="text-sm p-2">
          <a href="https://github.com/matthewricklefs">GITHUB</a>
        </li>
      </ul>
    </aside>

    <!-- Navbar -->
    <header class="py-3 pl-5">
      <Navigation />
    </header>

    <!-- Body -->
    <div class="container mx-auto">
      <nuxt />
    </div>

    <!-- Footer -->
    <footer class="w-full md:p-24 sm:p-6 p-1">
      <div class="flex flex-col justify-around items-center">
        <div class="w-full flex flex-row sm:flex-row sm:justify-between">
          <div class="w-full flex flex-col place-items-start">
            <h5 class="sm:text-md text-sm">Location</h5>

            <address class="sm:text-sm text-xs">
              Brooklyn, NY<br />
              USA
            </address>
          </div>

          <div class="w-full flex flex-col place-items-end">
            <h5 class="sm:text-md text-sm">Say Hello</h5>

            <a class="sm:text-sm text-xs -mr-4">
              <router-link to="/contact">Contact</router-link>
            </a>
          </div>
        </div>

        <div
          class="w-full flex flex-row basis-1/3 flex-wrap sm:flex-col"
          style="visibility: visible; animation-name: fadeInUp"
        >
          <div>
            <address>© 2021 Matthew Ricklefs - All Rights Reserved.</address>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      images: {
        imageThree: require('../assets/logo.png'),
        imageSix: require('../assets/images/matty3.png'),
      },
    }
  },
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
