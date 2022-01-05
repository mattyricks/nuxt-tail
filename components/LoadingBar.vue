<template>
  <div v-if="loading" class="loading-page">
    <div class="loading">
      <div class="bubble-wrapper">
        <div ref="bubble" class="bubble">
          <img
            class="bubble-image"
            src="https://s3.ap-southeast-2.amazonaws.com/daily-fire-assets/slack-white.svg"
          />
        </div>
        <div ref="bubblePulse" class="bubble-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  loading: false,
  data: () => ({
    loading: false,
  }),
  // mounted() {
  //   const { bubble, bubblePulse } = this.$refs
  //   const timeline = new this.$gsap.TimelineMax

  //   timeline.to(bubble, 0.4, {
  //     scale: 0.8,
  //     rotation: 16,
  //     ease: Back.easeOut.config(1.7),
  //   })
  //   timeline.to(
  //     bubblePulse,
  //     0.5,
  //     {
  //       scale: 0.9,
  //       opacity: 1,
  //     },
  //     '-=0.6'
  //   )

  //   this.timeline.to(bubble, 1.2, {
  //     scale: 1,
  //     rotation: '-=16',
  //     ease: Elastic.easeOut.config(2.5, 0.5),
  //   })
  //   this.timeline.to(
  //     bubblePulse,
  //     1.1,
  //     {
  //       scale: 3,
  //       opacity: 0,
  //       ease: Expo.easeOut,
  //     },
  //     '-=1.2'
  //   )
  // },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}

.bubble-wrapper {
  position: relative;
}

.bubble {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #272727;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}

.bubble-image {
  height: 50%;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
