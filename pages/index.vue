<template>
  <div class="h-screen w-screen px-6">
    <!-- About Intro -->
    <section class="flex flex-col items-center justify-center px-12">
      <!-- Panel 1 -->
      <div class="flex flex-col">
        <!-- Heading -->
        <div class="flex flex-col">
          <h3
            class="from-neutral-500 font-light text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm"
          >
            hello, my name is
          </h3>
          <h1
            split-by="letter"
            letter-animation="hover"
            class="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-3"
          >
            Matthew Ricklefs
            <br />
          </h1>
          <h3
            class="from-neutral-500 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-3"
          >
            I produce content for the web.
            <br />
          </h3>
          <!-- Paragraph -->
          <p class="text-sm font-normal w-full">
            I'm motivated by the results gained through prioritizing customers
            needs, so I strive to build web applications that mirror a specific
            vision. It would be a gift to come into sync with a team of
            individuals creating meaningful content with consideration of the
            lasting impact over the long-term. People that are driven by
            solutions architecture. Simply, looking for a good fit.
          </p>
          <!-- Connect Link -->
          <a
            class="text-sm py-6"
            href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/"
          >
            connect
          </a>
        </div>
      </div>
    </section>

    <!-- Skills ----------------------------- -->
    <section class="flex flex-col px-12">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">skill</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm p-3">
          I like learning new things. Here are a few topics I am proficient
          with.
        </p>
      </div>

      <!-- Icons -->
      <div class="flex items-center justify-around">
        <div class="col">
          <div class="figure">
            <figcaption class="self-center">
              <span class="text-sm font-light">01</span>
            </figcaption>

            <figure
              class="still-blob flex flex-col items-center justify-center"
            >
              <h4 class="text-sm font-light">FRONT END</h4>

              <img
                class="h-15 w-12 object-contain basis-1/4 self-center"
                :src="icons.front"
              />
            </figure>
          </div>

          <div class="figure">
            <figcaption class="self-center">
              <span class="text-sm font-light">02</span>
            </figcaption>

            <figure
              class="still-blob flex flex-col items-center justify-center self-end"
            >
              <h4 class="text-sm font-light">UI DESIGN</h4>
              <img
                class="h-15 w-12 object-contain relative basis-1/4 self-center"
                :src="icons.ui"
              />
            </figure>
          </div>
        </div>

        <div class="col">
          <div class="figure">
            <figcaption class="self-center">
              <span class="text-sm font-light">03</span>
            </figcaption>

            <figure
              class="still-blob flex flex-col items-center justify-center"
            >
              <h4 class="text-sm font-light">BACK END</h4>

              <img
                class="h-15 w-12 object-contain basis-1/4 self-center"
                :src="icons.back"
              />
            </figure>
          </div>

          <div class="figure">
            <figcaption class="self-center">
              <span class="text-sm font-light">04</span>
            </figcaption>

            <figure
              class="gsap-figure still-blob flex flex-col items-center justify-center"
            >
              <h4 class="text-sm font-light">UX DESIGN</h4>
              <img
                class="h-15 w-12 object-contain relative basis-1/4 self-center"
                :src="icons.ux"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology -->
    <section class="flex flex-col px-12">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">technology</h6>

        <p class="font-light text-sm p-3">
          Some tech I'm currently working with.
        </p>
      </div>

      <!-- Icons -->
      <div class="flex items-center justify-around">
        <div class="flex flex-col items-stretch justify-between">
          <ul v-for="(icon, i) in logos.left" :key="i" class="flex">
            <div class="figure">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">{{ i }}</span>
              </figcaption>

              <figure
                class="still-blob flex items-center justify-center self-end"
              >
                <img
                  class="h-16 w-16 object-contain relative basis-1/4 self-center"
                  :src="icon"
                />
              </figure>
            </div>
          </ul>
        </div>

        <div class="flex flex-col items-stretch justify-between">
          <ul v-for="(icon, i) in logos.right" :key="i" class="">
            <div class="figure">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">{{ i }}</span>
              </figcaption>

              <figure
                class="still-blob flex items-center justify-center self-end"
              >
                <img
                  class="h-32 w-32 object-contain relative basis-1/4 self-center"
                  :src="icon"
                />
              </figure>
            </div>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects ------------------- -->
    <section class="flex flex-col px-12">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">work</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm p-3">
          I am a bit busy finishing up an apprenticeship (01/2022) but I'll be
          adding so much more to this section throughout the month. Stay tuned!
        </p>
      </div>

      <!-- Icons -->
      <div class="w-full flex flex-col items-evenly justify-evenly px-10">
        <div class="figure flex justify-between items-center border-b-2">
          <figcaption class="flex flex-col justify-between">
            <span class="text-sm font-light">01</span>
            <h4 class="font-thin text-xs sm:text-sm">TRACKING FUNDS</h4>
          </figcaption>

          <figure class="self-center mr-3">
            <img class="h-10 w-8 object-contain" :src="icons.coins" />
          </figure>

          <a href="https://pensive-jackson-2a7810.netlify.app">
            <svg
              class="h-3 w-4 justify-self-center"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div class="figure flex justify-between items-center border-b-2">
          <figcaption class="flex flex-col justify-between">
            <span class="text-sm font-light">02</span>
            <h4 class="font-thin text-xs sm:text-sm">SPOTIFY OAUTH</h4>
          </figcaption>

          <figure class="self-center">
            <img class="h-10 w-8 object-contain" :src="icons.spotify" />
          </figure>

          <a href="https://spotify-1-seven.vercel.app/">
            <svg
              class="case-study-list-item__icon h-3 w-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <!--  -->
    </section>

    <!-- Ideas Section -->
    <section class="flex flex-col px-12">
      <!-- Heading -->
      <!-- Heading -->
      <div class="flex flex-col">
        <h3
          class="from-neutral-500 font-light text-lg sm:text-sm md:text-lg lg:text-lg xl:text-sm"
        >
          connection
        </h3>

        <h1
          split-by="letter"
          letter-animation="hover"
          class="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-3"
        >
          What's next?
          <br />
        </h1>

        <!-- Paragraph -->
        <p class="text-sm font-normal w-full">
          My inbox is always open, whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
        <!-- Connect Link -->
        <a class="text-sm py-6" href="mailto:ricklefsmatthew1003@gmail.com"
          >say hello</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import { byLetter, byWord } from '../utils/splitting'

export default {
  name: 'About',
  transition: {
    appear: true,
    css: false,
    beforeEnter(el) {
      this.$gsap.set(el.children, {
        y: -100,
        scale: 0.1,
        opacity: 0,
        duration: 1,
      })
    },
    enter(el, done) {
      this.$gsap.to(el.children, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: done,
        stagger: 0.5,
      })
    },
  },
  data() {
    return {
      images: {
        imageOne: require('../assets/images/matty6.jpeg'),
        imageThree: require('../assets/images/logos/logo.png'),
        imageFour: require('../assets/images/logos/coder-zen.png'),
        imageFive: require('../assets/images/matty-2.png'),
        imageSix: require('../assets/images/matty3.png'),
        quoteLeft: require('../assets/images/tween/quote-l.png'),
        quoteRight: require('../assets/images/tween/quote-r.png'),
      },
      logos: {
        left: {
          vue: require('../assets/images/logos/logo.png'),
          react: require('../assets/images/logos/react-logo.svg'),
          aws: require('../assets/images/logos/aws-logo.png'),
          express: require('../assets/images/logos/express-logo.png'),
        },
        right: {
          nuxt: require('../assets/images/logos/nuxt.png'),
          next: require('../assets/images/logos/next-logo.svg'),
          mongo: require('../assets/images/logos/mongodb-logo.svg'),
          node: require('../assets/images/logos/node-logo.svg'),
        },
      },
      icons: {
        ui: require('../assets/images/icons/icon01.svg'),
        front: require('../assets/images/icons/icon02.svg'),
        back: require('../assets/images/icons/icon03.svg'),
        ux: require('../assets/images/icons/icon04.svg'),
        coins: require('../assets/images/icons/coins.png'),
        spotify: require('../assets/images/icons/spotify.png'),
      },
      words: ['design', 'develop', 'innovate', 'create'],
    }
  },
  mounted() {
    // this.horizontalSnap()
    this.splitting()
    this.typing()
    // this.drawing()
    this.beforeEnter()
    this.enter()
  },
  methods: {
    // Section Snapping
    horizontalSnap() {
      const gsap = this.$gsap
      const sections = gsap.utils.toArray('.panel')

      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.contain',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: '+=3500',
        },
      })
    },
    // Text Splitting
    splitting() {
      const splitTargets = document.querySelectorAll('[split-by]')

      splitTargets.forEach((node) => {
        const type = node.getAttribute('split-by')
        let nodes = null

        if (type === 'letter') {
          nodes = byLetter(node.innerText)
        } else if (type === 'word') {
          nodes = byWord(node.innerText)
        }

        if (nodes) {
          node.firstChild.replaceWith(...nodes)
        }
      })
    },
    // SVG Path Drawing
    drawing() {
      const paths = document.querySelectorAll('svg path')

      paths.forEach((path, index) => {
        path.setAttribute('stroke-dasharray', path.getTotalLength(index))
        path.setAttribute('stroke-dashoffset', path.getTotalLength(index))

        if (index === 0) {
          path.innerHTML =
            `<animate id="a` +
            index +
            `" attributeName="stroke-dashoffset" begin="0s" dur="5s" to="0" fill="freeze" />`
        } else {
          path.innerHTML =
            `<animate id="a` +
            index +
            `" attributeName="stroke-dashoffset" begin="0s" dur="5s" to="0" fill="freeze" />`
        }
      })
    },
    blobbing() {},
    // Tween Timelines
    tweening() {},
    // Iterating Blobs
    typing() {
      this.$gsap.to('.cursor', {
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1,
      })

      const boxTl = this.$gsap.timeline()

      boxTl
        .to('.box', {
          duration: 1,
          width: '17vw',
          delay: 0.5,
          ease: 'power4.inOut',
        })
        .from('.hi', {
          duration: 1,
          y: '7vw',
          ease: 'power3.out',
          onComplete: () => masterTl.play(),
        })
        .to('.box', {
          duration: 1,
          height: '7vw',
          ease: 'elastic.out',
        })
        .to('.box', {
          duration: 2,
          autoAlpha: 0.5,
          yoyo: true,
          repeat: -1,
        })

      const masterTl = this.$gsap
        .timeline({
          repeat: -1,
        })
        .pause()

      this.words.forEach((word) => {
        const tl = this.$gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 1,
        })
        tl.to('.text', {
          duration: 1,
          text: word,
        })
        masterTl.add(tl)
      })
    },
    staggering() {
      // const figure = document.querySelectorAll('.figure')
    },
    beforeEnter() {
      const figure = document.querySelectorAll('.figure')

      this.$gsap.set(figure, {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 1,
      })
    },
    enter(done) {
      const figure = document.querySelectorAll('.figure')

      this.$gsap.to(figure, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: done,
        stagger: 0.3,
        delay: 0.3,
      })
    },
  },
}
</script>
