<template>
  <!-- TODO: Can you apply transition to entire template? -->

  <div
    class="theme-switch-wrapper xl:p-40 lg:pl-36 md:pl-32 sm:pl-24 pl-14 h-screen w-screen overflow-scroll"
    data-theme="light"
  >
    <!-- Page Title -->
    <div class="panel h-screen w-full mt-12">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none m-0 pb-1"
      >
        Hello, I'm Matthew.
        <br />
        Full Stack Developer
        <br />
        based in New York
      </h1>
    </div>

    <!-- Projects Section -->
    <section class="panel h-screen w-full p-12 pb-7">
      <!-- See All Projects.. -->
      <div class="flex flex-col items-start justify-end">
        <h2 class="flex font-thin tracking-normal uppercase text-lg sm:text-xl">
          Explore Projects
        </h2>

        <p class="tracking-wide mb-10 font-light text-lg">
          Check out some of my recent work.
        </p>
      </div>

      <!-- Project Card -->
      <div
        class="p-6 m-6 flex flex-row-reverse font-sans rounded-3xl shadow-2xl hover:shadow-zinc-500"
      >
        <!-- Image -->
        <div class="flex-none w-48 relative">
          <img
            :src="images.imageSix"
            alt=""
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <!-- Header -->
            <h1 class="flex-auto text-lg font-semibold text-gray-900 font-sans">
              Classic Spotify Example
            </h1>
            <!-- Body -->
            <div class="text-lg font-thin text-gray-400 sans-serif">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              laborum perspiciatis odit, pariatur alias architecto impedit odio
              dicta fugit explicabo labore voluptas libero delectus quo nihil
              vel iste laboriosam natus!
            </div>
            <!-- Tags -->
            <div
              class="w-full flex-none text-sm font-medium text-gray-700 mt-2"
            >
              Next.js
            </div>
          </div>

          <div
            class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200"
          ></div>
          <!-- Routing Links -->
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <!-- View Project -->
              <button
                class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                View Project
              </button>
              <!-- View Source -->
              <button
                class="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900"
                type="button"
              >
                View Source
              </button>
            </div>
          </div>
          <!-- Subtext -->
          <p class="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perferendis. Tempora at, accusamus aut et qui ea dolores itaque
            velit nisi. Mollitia sapiente voluptate incidunt consectetur est
            libero dolorum magni.
          </p>
        </form>
      </div>

      <!-- Project Card -->
      <div
        class="p-6 m-6 flex flex-row-reverse font-sans rounded-3xl shadow-2xl hover:shadow-zinc-500"
      >
        <!-- Image -->
        <div class="flex-none w-48 relative">
          <img
            :src="images.imageSix"
            alt=""
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <!-- Header -->
            <h1 class="flex-auto text-lg font-semibold text-gray-900">
              Classic Spotify Example
            </h1>
            <!-- Body -->
            <div class="text-lg font-thin text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              laborum perspiciatis odit, pariatur alias architecto impedit odio
              dicta fugit explicabo labore voluptas libero delectus quo nihil
              vel iste laboriosam natus!
            </div>
            <!-- Tags -->
            <div
              class="w-full flex-none text-sm font-medium text-gray-700 mt-2"
            >
              Next.js
            </div>
          </div>

          <div
            class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200"
          ></div>
          <!-- Routing Links -->
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <!-- View Project -->
              <button
                class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                View Project
              </button>
              <!-- View Source -->
              <button
                class="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900"
                type="button"
              >
                View Source
              </button>
            </div>
          </div>
          <!-- Subtext -->
          <p class="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perferendis. Tempora at, accusamus aut et qui ea dolores itaque
            velit nisi. Mollitia sapiente voluptate incidunt consectetur est
            libero dolorum magni.
          </p>
        </form>
      </div>
    </section>

    <!-- Ideas Section -->
    <section
      class="panel h-screen w-full p-12 flex flex-col justify-around items-center"
    >
      <div class="">
        <h2 class="flex font-thin tracking-normal uppercase text-lg sm:text-xl">
          EXPLORE IDEAS
        </h2>
        <p class="tracking-wide mb-10 font-light text-sm sm:text-lg">
          Need a developer for your next project? Let's work together.
        </p>
      </div>

      <div class="custom-link form-group">
        <button id="submit" class="rounded-lg" type="submit" name="submit">
          <strong class="rounded-lg">
            <router-link to="/contact"><p>Contact Me</p></router-link>

            <b></b>
            <i></i>
          </strong>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: {
        imageOne: require('../assets/images/matty4.jpeg'),
        imageTwo: require('../assets/images/code.jpeg'),
        imageThree: require('../assets/logo.png'),
        imageSix: require('../assets/images/matty3.png'),
      },
    }
  },
  // mounted() {
  //   const sections = gsap.utils.toArray('.panel')

  //   sections.forEach((panel, i) => {
  //     this.$ScrollTrigger.create({
  //       trigger: panel,
  //       start: 0,
  //       scrub: true,
  //       pinSpacing: false,
  //     })

  //     this.$ScrollTrigger.create({
  //       snap: 1 / 3,
  //     })
  //   })
  // },

  methods: {
    toggleSwitch() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      )
      function switchTheme(e) {
        if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark')
        } else {
          document.documentElement.setAttribute('data-theme', 'light')
        }
      }
      toggleSwitch.addEventListener('change', switchTheme, false)
    },
  },
}
</script>
