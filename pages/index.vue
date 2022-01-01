<template>
  <div
    class="contain flex flex-col items-end flex-nowrap min-h-screen bg-offwhite overflow-y-hidden"
    data-theme="light"
  >
    <!-- About Intro -->
    <section
      class="h-screen w-screen panel px-auto flex flex-col items-center justify-around"
    >
      <!-- Blob -->
      <!-- <div class="blob flex items-center"></div> -->
      <!-- Panel 1 -->
      <div class="flex flex-col items-center justify-between">
        <!-- Heading -->
        <h1
          split-by="letter"
          letter-animation="hover"
          class="font-light text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-26"
        >
          Hello, I'm Matthew

          <br />
        </h1>

        <!-- Header -->
        <div
          class="h-full w-full flex flex-col items-center space-between p-6 m-3 rounded-2xl"
        >
          <div
            class="flex flex-col items-center justify-center basis-3/5 p-12 mx-auto"
          >
            <img class="h-4 w-6" :src="images.quoteLeft" alt="" />

            <h3
              split-by="letter"
              letter-animation="hover"
              class="text-2xl leading-relaxed px-26"
            >
              I develop and design for the web.
              <br />
            </h3>

            <img class="h-8 w-8" :src="images.quoteRight" alt="" />
          </div>

          <!-- Paragraph -->
          <div class="flex items-center justify-center max-w-md flex-wrap">
            <p class="text-slate-800 font-light whitespace-normal"></p>
          </div>
        </div>
      </div>
      <!-- Panel 2 -->
      <div class="left">
        <!-- Heading -->
        <div class="flex flex-col items-center justify-center">
          <h6
            split-by="letter"
            letter-animation="breath"
            class="flex font-thin tracking-normal uppercase text-2xl"
          >
            SKILLS
          </h6>

          <!-- Sub Heading -->
          <!-- <p class="tracking-wide mb-2 font-light text-xl">
            I like learning new things. Here are a few topics I am proficient
            with.
          </p>
        </div> -->

          <!-- Icons -->
          <div class="flex items-center justify-center">
            <div class="left flex flex-row">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">01</span>
              </figcaption>

              <figure
                class="still-blob flex flex-col items-center justify-center self-end"
              >
                <h4 class="text-md font-thin">UI DESIGN</h4>
                <img
                  class="h-15 w-12 object-contain relative basis-1/4 self-center"
                  :src="icons.ui"
                />
              </figure>

              <figcaption class="self-center">
                <span class="text-sm font-light">02</span>
              </figcaption>

              <figure
                class="still-blob flex flex-col items-center justify-center"
              >
                <h4 class="text-md font-thin">FRONT END</h4>

                <img
                  class="h-15 w-12 object-contain basis-1/4 self-center"
                  :src="icons.front"
                />
              </figure>
            </div>

            <div class="right flex flex-row">
              <figcaption class="self-center">
                <span class="text-sm font-light">03</span>
              </figcaption>

              <figure
                class="still-blob p-3 flex flex-col items-center justify-center"
              >
                <h4 class="text-md font-thin">BACK END</h4>

                <img
                  class="h-15 w-12 object-contain basis-1/4 self-center"
                  :src="icons.back"
                />
              </figure>

              <figcaption class="self-center">
                <span class="text-sm font-light">04</span>
              </figcaption>

              <figure
                class="still-blob flex flex-col items-center justify-center"
              >
                <h4 class="text-md font-thin">UX DESIGN</h4>
                <img
                  class="h-15 w-12 object-contain relative basis-1/4 self-center"
                  :src="icons.ux"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <!-- Panel 3 -->
      <div class="right">
        <!-- Heading -->
        <div class="flex flex-col items-center justify-center">
          <h6
            split-by="letter"
            letter-animation="breath"
            class="font-thin tracking-normal uppercase text-2xl"
          >
            TECHNOLOGIES
          </h6>

          <!-- <p class="tracking-wide mb-10 font-light text-xl">
            Some tech I'm currently working with.
          </p> -->
        </div>

        <!-- Icons -->
        <div class="flex flex-col items-center justify-center">
          <div class="left flex justify-between">
            <ul v-for="(icon, i) in logos.left" :key="i" class="">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">{{ i }}</span>
              </figcaption>

              <figure
                class="still-blob flex flex-col items-center justify-center self-end"
              >
                <img
                  class="h-32 w-32 object-contain relative basis-1/4 self-center"
                  :src="icon"
                />
              </figure>
            </ul>
          </div>

          <div class="right flex justify-between">
            <ul v-for="(icon, i) in logos.right" :key="i" class="">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">{{ i }}</span>
              </figcaption>

              <figure
                class="still-blob flex flex-col items-center justify-center self-end"
              >
                <img
                  class="h-32 w-32 object-contain relative basis-1/4 self-center"
                  :src="icon"
                />
              </figure>
            </ul>
          </div>
        </div>
      </div>
      <!-- Connect -->
      <div class="relative">
        <button
          id="submit"
          class="rounded-lg bg-transparent p-6 m-3 hover:scale-y-125 ease-in-out duration-200 z-50 border-green-100"
          type="submit"
          name="submit"
        >
          <a href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/">
            <p>Let's Connect</p>
          </a>
        </button>
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
        scale: 0.1,
        opacity: 0,
        duration: 1,
      })
    },
    enter(el, done) {
      this.$gsap.to(el.children, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay: el.dataset.index * 0.2,
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
          graphQl: require('../assets/images/logos/graphql-logo.svg'),
          express: require('../assets/images/logos/express-logo.png'),
        },
        right: {
          nuxt: require('../assets/images/logos/nuxt.png'),
          next: require('../assets/images/logos/next-logo.svg'),
          mongo: require('../assets/images/logos/mongodb-logo.svg'),
          redux: require('../assets/images/logos/redux-logo.svg'),
          node: require('../assets/images/logos/node-logo.svg'),
        },
      },
      icons: {
        ui: require('../assets/images/icons/icon01.svg'),
        front: require('../assets/images/icons/icon02.svg'),
        back: require('../assets/images/icons/icon03.svg'),
        ux: require('../assets/images/icons/icon04.svg'),
      },
    }
  },
  mounted() {
    this.splitting()
    this.drawing()
  },
  methods: {
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
  },
}
</script>

<style scoped></style>
