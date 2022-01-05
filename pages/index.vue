<template>
  <div class="h-screen w-screen px-3">
    <!-- About Intro -->
    <section class="flex flex-col items-center justify-center">
      <!-- Blob -->
      <div class="blob float-right"></div>

      <!-- Panel 1 -->
      <div class="flex flex-col">
        <!-- Heading -->
        <div class="flex flex-col">
          <h3
            class="from-neutral-500 font-light text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm"
          >
            Hello, my name is
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
          <p class="text-base font-light w-1/2">
            I'm a result-driven and customer-focused front-end developer
            specializing in building interfaces and application of web.
          </p>
          <!-- Connect Link -->
          <a
            class="text-sm p-2"
            href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/"
          >
            connect
          </a>
        </div>
      </div>
    </section>

    <!-- Skills ----------------------------- -->
    <section class="flex flex-col pl-14">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">skills</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm py-3">
          I like learning new things. Here are a few topics I am proficient
          with.
        </p>
      </div>

      <!-- Icons -->
      <div class="flex items-stretch justify-between">
        <figcaption class="self-center">
          <span class="text-sm font-light mb-3">01</span>
        </figcaption>

        <figure
          class="gsap-figure still-blob flex flex-col items-center justify-center self-end"
        >
          <h4 class="text-sm font-thin">UI DESIGN</h4>
          <img
            class="h-15 w-12 object-contain relative basis-1/4 self-center"
            :src="icons.ui"
          />
        </figure>

        <figcaption class="self-center">
          <span class="text-sm font-light">02</span>
        </figcaption>

        <figure
          class="gsap-figure still-blob flex flex-col items-center justify-center"
        >
          <h4 class="text-sm font-thin">FRONT END</h4>

          <img
            class="h-15 w-12 object-contain basis-1/4 self-center"
            :src="icons.front"
          />
        </figure>

        <figcaption class="self-center">
          <span class="text-sm font-light">03</span>
        </figcaption>

        <figure
          class="gsap-figure still-blob p-3 flex flex-col items-center justify-center"
        >
          <h4 class="text-sm font-thin">BACK END</h4>

          <img
            class="h-15 w-12 object-contain basis-1/4 self-center"
            :src="icons.back"
          />
        </figure>

        <figcaption class="self-center">
          <span class="text-sm font-light">04</span>
        </figcaption>

        <figure
          class="gsap-figure still-blob flex flex-col items-center justify-center"
        >
          <h4 class="text-sm font-thin">UX DESIGN</h4>
          <img
            class="h-15 w-12 object-contain relative basis-1/4 self-center"
            :src="icons.ux"
          />
        </figure>
      </div>
    </section>

    <!-- Technology -->
    <section class="flex flex-col pl-14">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">technologies</h6>

        <p class="font-light text-sm py-3">
          Some tech I'm currently working with.
        </p>
      </div>

      <!-- Icons -->
      <div class="flex flex-col">
        <div class="flex items-stretch justify-between">
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

        <div class="flex items-stretch justify-between">
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
    </section>

    <!-- Projects ------------------- -->
    <section class="flex flex-col pl-14">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">projects</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm py-3">
          If you need a developer for your next project, let's work together.
        </p>
      </div>

      <div class="project">
        <div className="project-inner">
          <header>
            <div className="project-top">
              <div className="folder">
                <button>Folder Icon Button</button>
              </div>
              <div className="project-links">
                <!-- Github Link -->
                <a
                  href="{github}"
                  aria-label="GitHub Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Github Icon Button</button>
                </a>

                <!-- External Link -->
                <a
                  href="{external}"
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>External Icon Button</button>
                </a>
              </div>
            </div>

            <!-- Project Title -->
            <h3 className="project-title">
              <a href="{external}" target="_blank" rel="noreferrer">
                Project Title
              </a>
            </h3>

            <!-- Project Description -->
            <div className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla
              harum dolores ut architecto pariatur, illo placeat molestiae
              animi, praesentium saepe voluptas numquam alias explicabo
              asperiores ea officiis quia. Dolores.
            </div>
          </header>
          <footer>
            <ul className="project-tech-list">
              <li key="{i}">Project Technology Used</li>
            </ul>
          </footer>
        </div>
      </div>
    </section>

    <!-- Ideas Section -->
    <section class="flex flex-col pl-14">
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light tracking-wide">ideas</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm py-3">
          If you need a developer for your next project, let's work together.
        </p>

        <!-- Connect Link -->
        <a
          class="text-sm p-2"
          href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/"
        >
          <nuxt-link to="/contact">contact</nuxt-link>
        </a>
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
      words: ['design', 'develop', 'innovate', 'create'],
    }
  },
  mounted() {
    // this.horizontalSnap()
    // this.splitting()
    // this.typing()
    // this.drawing()
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
  },
}
</script>
