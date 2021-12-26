<template>
  <!-- TODO: Can you apply transition to entire template? -->
  <transition
    name="custom-classes-transition"
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight"
  >
    <div
      class="theme-switch-wrapper xl:p-40 lg:pl-36 md:pl-32 sm:pl-24 pl-14"
      data-theme="light"
    >
      <!-- Page Title -->
      <div class="w-full mt-12">
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

      <!-- SVG Animation -->
      <section class="w-full flex flex-wrap wave-section">
        <svg
          width="100%"
          height="175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="wave-top"
        >
          <path fill="white" data-theme="light">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="6.66s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
        
                      M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
        
                      M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
                      M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                     "
            ></animate>
          </path>
        </svg>

        <figure class="w-full h-full m-0">
          <img class="w-full h-2/5" :src="images.imageTwo" alt="" />
        </figure>

        <svg
          width="100%"
          height="172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white" data-theme="light">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="3.33s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
        
                      M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
        
                      M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
                      M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                     "
            ></animate>
          </path>
        </svg>
      </section>

      <!-- Projects -->
      <section class="p-12 h-full w-full pb-7">
        <!-- See All Projects.. -->
        <div class="flex flex-col items-start justify-end">
          <h2
            class="flex font-thin tracking-normal uppercase text-lg sm:text-xl"
          >
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
              <h1
                class="flex-auto text-lg font-semibold text-gray-900 font-sans"
              >
                Classic Spotify Example
              </h1>
              <!-- Body -->
              <div class="text-lg font-thin text-gray-400 sans-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis laborum perspiciatis odit, pariatur alias architecto
                impedit odio dicta fugit explicabo labore voluptas libero
                delectus quo nihil vel iste laboriosam natus!
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis laborum perspiciatis odit, pariatur alias architecto
                impedit odio dicta fugit explicabo labore voluptas libero
                delectus quo nihil vel iste laboriosam natus!
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

      <!-- Explore Ideas -->
      <section class="p-12">
        <div class="">
          <h2
            class="flex font-thin tracking-normal uppercase text-lg sm:text-xl"
          >
            EXPLORE IDEAS
          </h2>
          <p class="tracking-wide mb-10 font-light text-sm sm:text-lg">
            Need a developer for your next project? Let's work together.
          </p>

          <div class="custom-link form-group">
            <button id="submit" class="rounded-lg" type="submit" name="submit">
              <strong class="rounded-lg">
                <router-link to="/contact"><p>Contact Me</p></router-link>

                <b></b>
                <i></i>
              </strong>
            </button>
          </div>
        </div>
      </section>
    </div>
  </transition>
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
      show: false,
    }
  },
  mounted() {
    this.show = true
  },
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
