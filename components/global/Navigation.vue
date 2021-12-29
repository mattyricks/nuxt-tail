<template>
  <div class="flex justify-between p-5 text-sm" style="bottom: 0">
    <header class="w-full">
      <nav class="w-full mb-0">
        <!-- Main Menu -->
        <div class="">
          <ul class="flex flex-row place-content-end">
            <li class="text-sm p-2">
              <a class="">
                <router-link to="/">HOME</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a class="">
                <router-link to="/about">ABOUT</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a class="">
                <router-link to="/contact">CONTACT</router-link>
              </a>
            </li>
          </ul>

          <!-- Theme Switch -->
          <label class="pl-5 theme-switch h-9 relative w-17" for="checkbox">
            <input id="checkbox" class="invisible" type="checkbox" />
            <div class="slider round" @click="toggleSwitch" />
          </label>
        </div>
      </nav>
    </header>

    <nuxt-link v-if="prev" :to="{ name: name, params: { id: prev.slug } }">
      <div class="flex items-center">
        <div
          name="angle-left"
          scale="4"
          class="text-indigo-600 hover:text-orange-500"
        ></div>
        <!-- Prev -->
      </div>
    </nuxt-link>

    <span v-else class="p-3">&nbsp;</span>

    <nuxt-link v-if="next" :to="{ name: name, params: { id: next.slug } }">
      <div class="flex items-center">
        <div
          name="angle-right"
          scale="4"
          class="text-indigo-600 hover:text-orange-500"
        ></div>

        <!-- Next -->
      </div>
    </nuxt-link>

    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    name: {
      type: String,
      default: () => null,
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyEventHandler)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyEventHandler)
  },
  methods: {
    keyEventHandler(e) {
      if (e.key === 'ArrowLeft' && !!this.prev) {
        this.$router.push({
          name: this.name,
          params: { id: this.prev.slug },
        })
      }

      if (e.key === 'ArrowRight' && !!this.next) {
        this.$router.push({
          name: this.name,
          params: { id: this.next.slug },
        })
      }
    },

    toggleSwitch() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      )

      function switchTheme(e) {
        if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark')
        } else {
          document.documentElement.setAttribute('data-theme', 'light')
        }
      }

      toggleSwitch.addEventListener('change', switchTheme, false)
    },
  },
}
</script>
