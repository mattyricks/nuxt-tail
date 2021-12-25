<template>
  <div
    class="theme-switch-wrapper xl:p-40 lg:pl-36 md:pl-32 sm:pl-24 pl-14"
    data-theme="light"
  >
    <!-- Sidebar -->
    <aside
      class="h-screen fixed left-0 top-0 flex items-center xl:w-36 lg:w-32 md:w-24 sm:w-16 w-12"
    >
      <a
        href=""
        class="w-full block h-10 text-center mt-8 transition-all ease-in-out opacity-0 transform translate-y-7"
      >
        <img
          class="h-10"
          :src="images.imageThree"
          alt="Matthew Ricklefs Logo"
        />
      </a>

      <ul
        class="flex flex-row justify-center items-center w-full block leading-normal m-0 mt-36 -ml-2 p-0 transform -rotate-90 origin-center left-1/2 top-1/2 text-center"
      >
        <li class="text-sm p-2">
          <a href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/">
            LINKEDIN
          </a>
        </li>

        <li class="text-sm p-2">
          <a href="https://github.com/matthewricklefs">GITHUB</a>
        </li>
      </ul>
    </aside>

    <!-- Header -->
    <header class="w-full">
      <nav class="w-full mb-0">
        <!-- Main Menu -->
        <div class="main-menu">
          <ul class="flex flex-row place-content-end">
            <li class="text-sm p-2">
              <a>
                <router-link to="/">Home</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a>
                <router-link to="/about">About</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a>
                <router-link to="/contact">Contact</router-link>
              </a>
            </li>
          </ul>
        </div>

        <!-- Theme Switch -->
        <label class="theme-switch pl-5 h-9 relative w-17" for="checkbox">
          <input id="checkbox" class="invisible" type="checkbox" />
          <div class="slider round" @click="toggleSwitch"></div>
        </label>
      </nav>

      <!-- Page Title -->
      <div class="w-full mt-12">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none m-0 pb-1"
        >
          Contact
        </h1>
      </div>
    </header>

    <!-- Map ------------------ -->
    <section class="w-full flex flex-wrap p-3 pr-6">
      <iframe
        class="rounded-2xl m-1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96724.4207209076!2d-73.96888929428283!3d40.747987121652464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1639781504575!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>

    <!-- Contact Details ------------------ -->
    <section class="w-full flex flex-wrap pt-20">
      <!-- TODO: Partial Cleanup with heading and paragraph tags -->
      <div class="container">
        <div class="row">
          <!-- Location -->
          <div class="flex flex-col items-start justify-end wow fadeInUp">
            <h5
              class="flex font-thin tracking-normal uppercase text-lg sm:text-xl"
            >
              LOCATION
            </h5>
            <address class="tracking-wide mb-10 font-light text-sm sm:text-md">
              Brooklyn, New York &nbsp;
            </address>
          </div>

          <!-- Reach Me -->
          <div class="flex flex-col items-start justify-end wow fadeInUp">
            <h5
              class="flex font-thin tracking-normal uppercase text-lg sm:text-xl"
            >
              REACH ME
            </h5>
            <a
              class="tracking-wide mb-10 font-light text-sm sm:text-md"
              data-clipboard-text="ricklefsmatthew1003@gmail.com"
            >
              Click to copy my email address to your clipboard.
            </a>
          </div>

          <!-- TODO: Implement Responsive Clean Form Submit -->
          <!-- Form -->
          <div class="wow fadeInUp p-4">
            <div class="flex flex-col items-start w-full">
              <h5
                class="flex font-medium tracking-normal uppercase text-lg sm:text-xl"
              >
                CONTACT FORM
              </h5>

              <form
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-7/12"
              >
                <!-- Name -->
                <div class="identity-input mb-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Name</label
                  >
                  <input
                    v-model="name"
                    class="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                  />
                  <span id="emailHelp" class="text-xs text-red-700"></span>
                </div>
                <!-- Email -->
                <div class="identity-input mb-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Email</label
                  >
                  <input
                    id="identity"
                    v-model="email"
                    class="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                  />
                  <span id="emailHelp" class="text-xs text-red-700"></span>
                </div>
                <!-- Subject -->
                <div class="identity-input mb-1">
                  <label
                    for="identity"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Subject</label
                  >
                  <input
                    id="identity"
                    v-model="subject"
                    class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Title"
                    aria-describedby="emailHelp"
                  />
                  <span id="emailHelp" class="text-xs text-red-700"></span>
                </div>
                <!-- Body -->
                <div class="email-input mb-6">
                  <label
                    for="identity"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Body</label
                  >

                  <textarea
                    id="identity"
                    v-model="body"
                    aria-describedby="passwordHelp"
                    class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Message Content.."
                  />

                  <span id="passwordHelp" class="text-xs text-red-700"></span>
                </div>
                <!-- Send -->
                <div class="custom-link form-group">
                  <button
                    id="submit"
                    class="rounded-lg"
                    type="submit"
                    name="submit"
                  >
                    <strong class="rounded-lg">
                      <router-link to="/contact"><p>Send</p></router-link>
                      <b></b>
                      <i></i>
                    </strong>
                  </button>
                </div>
              </form>
              <!-- Success / Error Prompts -->
              <div class="form-group">
                <div
                  id="success"
                  class="alert alert-success wow fadeInUp"
                  role="alert"
                >
                  Thank you for your message! I will be in contact shortly.
                </div>

                <div
                  id="error"
                  class="alert alert-danger wow fadeInUp"
                  role="alert"
                >
                  Something went wrong, please try refreshing and submitting the
                  form again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-full md:p-24 sm:p-6 p-1">
      <div class="flex flex-col justify-around items-center">
        <div
          class="w-full flex flex-row basis-1/3 flex-wrap sm:flex-col"
          style="visibility: visible; animation-name: fadeInUp"
        >
          <div>
            <address>© 2021 Matthew Ricklefs - All Rights Reserved.</address>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: {
        imageOne: require('../assets/images/matty6.jpeg'),
        imageTwo: require('../assets/images/code.jpeg'),
        imageThree: require('../assets/logo.png'),
      },
      logos: {
        express: require('../assets/images/express-logo.png'),
        gatsby: require('../assets/images/gatsby-logo.svg'),
        graphQl: require('../assets/images/graphql-logo.svg'),
        mongo: require('../assets/images/mongodb-logo.svg'),
        next: require('../assets/images/next-logo.svg'),
        node: require('../assets/images/node-logo.svg'),
        prisma: require('../assets/images/prisma-logo.svg'),
        redux: require('../assets/images/redux-logo.svg'),
        react: require('../assets/images/react-logo.svg'),
      },
      icons: {
        ui: require('../assets/images/icon01.svg'),
        front: require('../assets/images/icon02.svg'),
        back: require('../assets/images/icon03.svg'),
        ux: require('../assets/images/icon04.svg'),
      },
    }
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
