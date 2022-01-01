<template>
  <div
    class="contain flex flex-col items-end flex-nowrap min-h-screen bg-offwhite overflow-y-hidden"
    data-theme="light"
  >
    <!-- Github -->
    <div>
      <a
        href="https://github.com/matthewricklefs"
        class="github-corner"
        aria-label="View source on GitHub"
      >
        <span>&nbsp;</span>
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style="position: absolute; top: 0; border: 0; right: 0"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style="transform-origin: 130px 106px"
            class="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          ></path>
        </svg>
      </a>
    </div>

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
    // Iterating Blobs
    blobbing() {},
    // Tween Timelines
    tweening() {},
  },
}
</script>

<style scoped></style>
