<template>
  <div
    class="c bg-emerald-200 flex flex-col items-center justify-center rounded-full"
  >
    <button class="p-3 bg-red-200 m-3 rounded-2xl" @click="animate()">
      Click Me
    </button>

    <div class="content flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl text-red-200 self-start p-3">LOREM</h1>

      <p class="nested">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        deleniti aperiam beatae illo, ab facere, quod enim culpa veritatis sit
        expedita, maiores sequi quam nihil earum velit tempora aliquam!
        Veritatis?
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { MotionPathPlugin } from 'gsap/all'

export default {
  data() {
    return {}
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.c',
        },
      })

      tl.from('.content', {
        x: 200,
        opacity: 0,
        duration: 1.5,
      }).from('.nested', {
        y: 400,
        opacity: 0,
        duration: 1,
      })
    },
  },
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
