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

          <figure class="self-center mr-3"></figure>

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
            <svg
              class="h-10 w-10 sm:h-16 sm:w-16 md:h-24 md:w-24"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="880.000000pt"
              height="920.000000pt"
              viewBox="0 0 880.000000 920.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                class="svg-icon"
                transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M4235 8793 c-784 -34 -1516 -288 -2168 -751 -372 -264 -732 -637
-994 -1032 -626 -941 -822 -2084 -547 -3183 120 -479 296 -867 585 -1293 276
-406 671 -793 1089 -1069 511 -337 1042 -534 1705 -632 174 -26 813 -26 995 0
652 93 1197 298 1725 650 386 257 757 617 1027 997 411 580 647 1208 723 1925
19 176 22 581 5 755 -70 741 -341 1446 -784 2036 -178 238 -466 537 -693 718
-576 462 -1244 748 -1977 846 -134 18 -511 42 -591 38 -16 -1 -61 -3 -100 -5z
m-60 -2113 c1032 -60 1963 -298 2860 -730 157 -75 216 -124 261 -212 28 -56
42 -150 33 -223 -14 -113 -117 -252 -229 -311 -48 -25 -66 -29 -140 -29 -94 0
-78 -5 -370 130 -717 332 -1532 539 -2340 595 -188 13 -764 13 -950 0 -328
-24 -689 -76 -1007 -147 -227 -51 -319 -52 -415 -5 -148 73 -226 226 -199 392
22 134 108 257 214 306 95 43 529 131 879 178 171 23 479 52 628 59 163 8 621
6 775 -3z m-62 -1600 c851 -52 1679 -270 2397 -630 155 -78 204 -116 245 -191
27 -49 30 -63 30 -145 0 -88 -2 -95 -43 -175 -59 -117 -134 -206 -202 -242
-80 -42 -116 -34 -340 73 -604 288 -1109 435 -1810 527 -113 15 -213 18 -610
18 -476 0 -517 -2 -795 -41 -148 -21 -389 -68 -559 -110 -185 -45 -259 -46
-344 -3 -97 48 -152 124 -173 235 -28 153 61 382 175 449 137 80 918 216 1366
238 162 8 506 6 663 -3z m200 -1520 c630 -74 1239 -260 1745 -533 126 -68 155
-98 194 -205 18 -47 22 -80 22 -187 1 -128 0 -131 -30 -185 -35 -61 -101 -113
-167 -131 -81 -22 -129 -8 -363 104 -530 253 -934 372 -1486 434 -215 24 -714
24 -923 0 -259 -30 -489 -74 -718 -138 -167 -46 -229 -49 -302 -15 -55 25
-119 90 -141 142 -53 126 0 375 102 476 41 42 109 67 309 117 301 75 585 120
920 145 28 2 187 2 355 1 231 -3 348 -9 483 -25z"
                />
              </g>
            </svg>
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
        <h6
          class="from-neutral-500 font-light text-lg sm:text-sm md:text-lg lg:text-lg xl:text-sm"
        >
          connection
        </h6>

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
export default {
  name: 'Home',
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
        coins: require('../assets/images/icons/coins.svg'),
        spotify: require('../assets/images/icons/spotify.svg'),
      },
      words: ['design', 'develop', 'innovate', 'create'],
    }
  },
  mounted() {
    this.beforeEnter()
    this.enter()
  },
  methods: {
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
