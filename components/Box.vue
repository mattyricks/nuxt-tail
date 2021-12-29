<template>
  <div :class="`p-2 border-2 rounded-lg h-16 w-16`"></div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      panelTimeline: gsap.timeline(),
    }
  },

  mounted() {
    // [... animations defined here]
  },

  methods: {
    playAnim() {
      this.panelTimeline.play(0)
    },
  },
}
</script>
