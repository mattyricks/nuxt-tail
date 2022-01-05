<template>
  <div
    class="xl:p-40 lg:pl-36 md:pl-32 sm:pl-24 pl-14 h-screen w-screen overflow-scroll"
    data-theme="light"
  >
    <section class="h-screen flex">
      <!-- TODO: Partial Cleanup with heading and paragraph tags -->
      <!-- Form -->
      <div class="basis-2/3">
        <div class="">
          <!-- Location -->
          <div class="flex flex-col items-start justify-end wow fadeInUp">
            <h5
              class="flex font-thin tracking-normal uppercase text-6xl sm:text-4xl"
            >
              LOCATION
            </h5>
            <address class="tracking-wide mb-10 font-light text-sm sm:text-md">
              Brooklyn, New York &nbsp;
              <br />
              *flexible
            </address>
          </div>

          <!-- Reach Me -->
          <div class="flex flex-col items-start justify-end wow fadeInUp">
            <h5
              class="flex font-thin tracking-normal uppercase text-6xl sm:text-4xl"
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

          <!-- Form -->
          <div class="">
            <div class="flex flex-col items-start w-full">
              <h5
                class="flex font-thin tracking-normal uppercase text-6xl sm:text-4xl"
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

      <!-- Map  -->
      <iframe
        class="rounded-2xl m-1 h-3/4 w-full basis-1/3"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96724.4207209076!2d-73.96888929428283!3d40.747987121652464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1639781504575!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      name: null,
      email: null,
      body: null,
      subject: null,
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
