<template>
  <div
    class="h-screen w-full flex flex-col items-center justify-center absolute"
  >
    <h1 class="ml9 text-3xl bg-fuchsia-400 text-slate-800 p-20 relative">
      <span class="text-wrapper relative block">
        <span class="letters text-slate-800 block p-4">Coffee mornings</span>
      </span>
    </h1>
  </div>
</template>

<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  mounted() {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml9 .letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    this.$anime
      .timeline({ loop: true })
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 800,
        delay: (el, i) => 45 * (i + 1),
      })
      .add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      })

    // [... animations defined here ]

    // const sections = gsap.utils.toArray('.panel')

    // function goToSection(i) {
    //   gsap.to(window, {
    //     scrollTo: {
    //       y: i * innerHeight,
    //       autoKill: false,
    //       ease: 'Power3.easeInOut',
    //     },
    //     duration: 0.85,
    //   })
    // }

    // this.$ScrollTrigger.defaults({
    //   // markers: true
    // })

    // sections.forEach((eachPanel, i) => {
    // const mainAnim = gsap.timeline({ paused: true });

    // this.$ScrollTrigger.create({
    //   trigger: eachPanel,
    //   onEnter: () => goToSection(i),
    // })

    // this.$ScrollTrigger.create({
    //   trigger: eachPanel,
    //   start: 'bottom bottom',
    //   onEnterBack: () => goToSection(i),
    // })
    // })
  },

  methods: {
    playAnim() {
      this.tl.play(0)
    },
  },
}
</script>

<style>
/* .ml9 {
  position: relative;
  font-weight: 200;
  font-size: 4em;
}

.ml9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
}

.ml9 .letter {
  display: inline-block;
  line-height: 1em;
} */
</style>
