<template>
  <div
    class="contain flex flex-col items-end flex-nowrap min-h-screen bg-offwhite"
    data-theme="light"
  >
    <!-- About Intro -->
    <section class="h-screen w-screen panel px-auto">
      <!-- Blob -->
      <div class="blob flex items-center"></div>

      <div class="flex flex-col items-center justify-between p-16 m-16">
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
          <!-- Crappy Selfie -->
          <!-- <img
            class="h-1/4 w-1/4 mx-auto object-cover object-top"
            :src="images.imageSix"
            alt="picture of Matthew"
          /> -->

          <!-- Quotes -->
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
          <div class="self-center max-w-md flex-wrap">
            <p
              split-by="letter"
              letter-animation="hover"
              class="text-slate-800 font-light p-10 whitespace-normal"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              nam, debitis asperiores libero eius labore porro maxime aliquam
              ipsum minus eum dolores deserunt mollitia cupiditate doloremque
              suscipit error corrupti voluptates?
            </p>
          </div>
        </div>

        <!-- Connect Link -->
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
      </div>
    </section>

    <!-- Skills ----------------------------- -->
    <section class="h-screen w-screen panel flex items-center justify-center">
      <!-- Blob -->
      <div class="blob-two"></div>

      <div class="p-16 m-16">
        <div class="flex flex-col p-16 m-16">
          <!-- Heading -->
          <h6
            split-by="letter"
            letter-animation="breath"
            class="flex font-thin tracking-normal uppercase text-2xl"
          >
            SKILLS
          </h6>

          <!-- Sub Heading -->
          <p class="tracking-wide mb-10 font-light text-xl">
            I like learning new things. Here are a few topics I am proficient
            with.
          </p>
        </div>

        <!-- Icons -->
        <div
          class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between"
        >
          <figure
            class="p-3 flex flex-col items-start justify-between rounded-2xl m-3 flex flex-row w-full h-full hover:bg-emerald-100 transition-all delay-75"
          >
            <img
              class="h-15 w-12 object-contain relative basis-1/4 self-center"
              :src="icons.ui"
            />
            <figcaption class="self-center">
              <span class="text-sm font-light mb-3">01</span>
              <h4 class="text-md font-thin">UI DESIGN</h4>
            </figcaption>
          </figure>

          <figure
            class="p-3 flex flex-col items-start justify-between rounded-2xl m-3 flex flex-row w-full h-full hover:bg-emerald-200 transition-all delay-75"
          >
            <img
              class="h-15 w-12 object-contain basis-1/4 self-center"
              :src="icons.front"
            />
            <figcaption class="self-center">
              <span class="text-sm font-light">02</span>
              <h4 class="text-md font-thin">FRONT END</h4>
            </figcaption>
          </figure>

          <figure
            class="p-3 flex flex-col items-start justify-between rounded-2xl m-3 flex flex-row w-full h-full hover:bg-emerald-300 transition-all delay-75"
          >
            <img
              class="h-15 w-12 object-contain basis-1/4 self-center"
              :src="icons.back"
            />
            <figcaption class="self-center">
              <span class="text-sm font-light">03</span>
              <h4 class="text-md font-thin">BACK END</h4>
            </figcaption>
          </figure>

          <figure
            class="p-3 flex flex-col items-start justify-between rounded-2xl m-3 flex flex-row w-full h-full hover:bg-emerald-400 transition-all delay-75"
          >
            <img
              class="h-15 w-12 object-contain relative basis-1/4 self-center"
              :src="icons.ux"
            />
            <figcaption class="self-center">
              <span class="text-sm font-light">04</span>
              <h4 class="text-md font-thin">UX DESIGN</h4>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Technologies ------------------- -->
    <section
      class="h-screen w-screen panel flex flex-col items-center justify-center"
    >
      <!-- Blob -->
      <!-- <div class="blob"></div> -->

      <div class="flex flex-col items-center justify-center">
        <h6
          split-by="letter"
          letter-animation="breath"
          class="font-thin tracking-normal uppercase text-2xl px-3"
        >
          TECHNOLOGIES
        </h6>

        <p class="tracking-wide mb-10 font-light text-xl">
          Some tech I'm currently working with.
        </p>

        <!-- Icons -->
        <ul class="flex items-center justify-center">
          <li v-for="icon in logos" :key="icon.key" class="list-none">
            <img class="h-36 w-36" :src="icon" />
            <br />
          </li>
        </ul>
      </div>
    </section>

    <!-- Ideas Section -->
    <section
      class="h-screen w-screen panel flex items-center justify-center snap-center"
    >
      <!-- Blob -->
      <div class="blob-two"></div>

      <div class="p-16 m-16">
        <div class="flex flex-col space-between p-16 m-16">
          <h2
            split-by="letter"
            letter-animation="breath"
            class="self-start font-thin tracking-normal uppercase text-5xl"
          >
            EXPLORE IDEAS
          </h2>

          <p class="tracking-wide mb-10 font-light text-3xl">
            Need a developer for your next project? Let's work together.
          </p>

          <div class="custom-link form-group flex">
            <button id="submit" class="rounded-lg" type="submit" name="submit">
              <strong class="rounded-lg">
                <router-link to="/contact"><p>Contact Me</p></router-link>

                <b></b>
                <i></i>
              </strong>
            </button>
          </div>
        </div>
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
        vue: require('../assets/images/logos/logo.png'),
        react: require('../assets/images/logos/react-logo.svg'),
        aws: require('../assets/images/logos/aws-logo.png'),
        graphQl: require('../assets/images/logos/graphql-logo.svg'),
        express: require('../assets/images/logos/express-logo.png'),
        nuxt: require('../assets/images/logos/nuxt.png'),
        next: require('../assets/images/logos/next-logo.svg'),
        mongo: require('../assets/images/logos/mongodb-logo.svg'),
        redux: require('../assets/images/logos/redux-logo.svg'),
        node: require('../assets/images/logos/node-logo.svg'),
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
    this.horizontalSnap()
    this.splitting()
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
    // Tween Timelines
    tweenLine() {},
    // iterating blobs
    iterativeBlobTrajectory() {},
  },
}
</script>

<style scoped></style>
