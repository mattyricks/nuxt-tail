<template>
  <div v-if="localStorageReady">
    <button
      id="theme-toggle"
      class="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
    >
      <svg
        class="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask id="moon-mask" class="moon">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          class="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g class="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
import '../utils/themeToggle.js'

export default {
  data() {
    return {
      storageKey: null,
      theme: null,
      localStorageReady: false,
    }
  },
  //   TODO: I need to use the Vuex Store because this is a Node.js environment.
  //   Window & Document objects do not exist.
  //   However, Vuex allows the browser and node envs to be in sync
  mounted() {
    if (window.localStorage) {
      this.localStorageReady = true
    }

    this.storageKey = 'theme-preference'
    this.theme = {
      value: this.getColorPreference(),
    }

    // set early so no page flashes // CSS is made aware
    this.reflectPreference()

    window.onload = () => {
      // set on load so that screen readers can see this value;
      this.reflectPreference()

      // now this script can find and listen for clicks on the control
      document
        .querySelector('#theme-toggle')
        .addEventListener('click', this.onClick)
    }

    // sync with system changes
    window
      .matchMedia(`(prefers-color-scheme: dark)`)
      .addEventListener('change', ({ matches: isDark }) => {
        this.theme.value = isDark ? 'dark' : 'light'
        this.setPreference()
      })
  },
  methods: {
    onClick() {
      // flipping current value
      this.theme.value = this.theme.value === 'light' ? 'dark' : 'light'

      this.setPreference()
    },

    getColorPreference() {
      if (localStorage.getItem(this.storageKey))
        return localStorage.getItem(this.storageKey)
      else
        return window.matchMedia(`(prefers-color-scheme: dark)`).matches
          ? 'dark'
          : 'light'
    },

    setPreference() {
      localStorage.setItem(this.storageKey, this.theme.value)
      this.reflectPreference()
    },

    reflectPreference() {
      document.firstElementChild.setAttribute('data-theme', this.theme.value)

      document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', this.theme.value)
    },
  },
}
</script>
