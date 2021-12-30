<template>
  <div
    class="contain flex flex-col flex-nowrap min-h-screen"
    data-theme="light"
  >
    <!-- About Intro -->
    <section
      class="h-screen w-screen bg-emerald-50 panel flex items-center justify-center"
    >
      <div class="flex p-16 m-16">
        <!-- Crappy Selfie -->
        <img
          class="h-2/5 w-2/5 max-w-screen-sm mx-auto object-cover object-top rounded-full bg-slate-200 shadow-md"
          :src="images.imageSix"
          alt="picture of Matthew"
        />

        <!-- Header -->
        <div class="h-full flex flex-col p-6 shadow-md rounded-2xl m-6">
          <!-- Heading -->
          <h1
            class="ml9 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none"
          >
            <span class="text-wrapper">
              <span class="letters">
                Hello, I'm Matthew. I design and code for the web.</span
              >
            </span>
            <br />
          </h1>

          <!-- SubHeading -->
          <p
            class="text-slate-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none p-1"
          >
            I design and code for the web.
            <br />
          </p>

          <!-- Connect Link -->
          <div class="">
            <button
              id="submit"
              class="rounded-lg bg-slate-100"
              type="submit"
              name="submit"
            >
              <strong class="rounded-lg">
                <a
                  href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/"
                  ><p>Let's Connect</p></a
                >

                <b></b>
                <i></i>
              </strong>
            </button>
          </div>

          <!-- Paragraph -->
          <p
            class="text-slate-800 font-extralight text-sm sm:text-lg p-3 m-2 w-3/4"
          >
            I'm a software developer with a passion for developing beautiful
            applications. I have two years of experience designing for web but
            am most passionate about solving real-world problems utilizing
            technology at the intersection of design and code.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills ----------------------------- -->
    <section
      class="h-screen w-screen bg-emerald-100 panel flex items-center justify-center"
    >
      <div class="p-16 m-16">
        <div class="flex flex-col p-16 m-16">
          <!-- Heading -->
          <h6 class="flex font-thin tracking-normal uppercase text-5xl">
            SKILLS
          </h6>

          <!-- Sub Heading -->
          <p class="tracking-wide mb-10 font-light text-3xl">
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
      class="h-screen w-screen bg-emerald-200 panel flex items-center justify-center"
    >
      <div class="p-16 m-16">
        <div class="flex flex-col p-16 m-16">
          <h6 class="font-thin tracking-normal uppercase text-5xl">
            TECHNOLOGIES
          </h6>

          <p class="tracking-wide mb-10 font-light text-3xl">
            Some tech I'm currently working with.
          </p>

          <ul class="flex flex-wrap flex-row items-center justify-center">
            <li
              v-for="(icon, index) in logos"
              :key="icon.key"
              :data-index="index"
              class="list-none"
            >
              <div class="flex p-6 m-6">
                <img class="h-20 w-20" :src="icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Ideas Section -->
    <section
      class="h-screen w-screen bg-emerald-300 panel flex items-center justify-center"
    >
      <div class="p-16 m-16">
        <div class="flex flex-col space-between p-16 m-16">
          <h2 class="self-start font-thin tracking-normal uppercase text-5xl">
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
export default {
  name: 'About',
  // transition: {
  //   appear: true,
  //   css: false,
  //   beforeEnter(el) {
  //     gsap.set(el.children, {
  //       scale: 0.1,
  //       opacity: 0,
  //     })
  //   },
  //   enter(el, done) {
  //     gsap.to(el.children, {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 0.7,
  //       ease: 'power2.inOut',
  //       onComplete: done,
  //       stagger: 0.3,
  //     })
  //   },
  // },
  data() {
    return {
      images: {
        imageOne: require('../assets/images/matty6.jpeg'),
        imageTwo: require('../assets/images/code.jpeg'),
        imageThree: require('../assets/logo.png'),
        imageFour: require('../assets/images/coder-zen.png'),
        imageFive: require('../assets/images/matty-2.png'),
        imageSix: require('../assets/images/matty3.png'),
      },
      logos: {
        vue: require('../assets/logo.png'),
        react: require('../assets/images/react-logo.svg'),
        aws: require('../assets/images/aws-logo.png'),
        graphQl: require('../assets/images/graphql-logo.svg'),
        express: require('../assets/images/express-logo.png'),
        nuxt: require('../assets/images/nuxt.png'),
        next: require('../assets/images/next-logo.svg'),
        mongo: require('../assets/images/mongodb-logo.svg'),
        redux: require('../assets/images/redux-logo.svg'),
        node: require('../assets/images/node-logo.svg'),
      },
      icons: {
        ui: require('../assets/images/icon01.svg'),
        front: require('../assets/images/icon02.svg'),
        back: require('../assets/images/icon03.svg'),
        ux: require('../assets/images/icon04.svg'),
      },
    }
  },
  mounted() {
    this.horizontalSnap()
  },
  methods: {
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
  },
}
</script>

<style scoped></style>
