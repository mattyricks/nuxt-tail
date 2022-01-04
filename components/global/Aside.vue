<template>
  <!-- Sidebar -->
  <aside class="flex items-center sticky top-0">
    <ul class="flex flex-row justify-center items-center text-center">
      <!-- Icons -->
      <div class="flex flex-col items-center justify-center">
        <div class="left justify-between">
          <ul v-for="(icon, i) in logos.left" :key="i" class="">
            <figcaption class="self-center">
              <span class="text-sm font-light mb-3">{{ i }}</span>
            </figcaption>

            <figure
              class="flex flex-col items-center justify-center self-end still-blob"
            >
              <img
                class="h-32 w-32 object-contain relative basis-1/4 self-center"
                :src="icon"
              />
            </figure>
          </ul>
        </div>

        <div class="right justify-between">
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
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      logos: {
        left: {
          vue: require('../../assets/images/logos/logo.png'),
          react: require('../../assets/images/logos/react-logo.svg'),
          aws: require('../../assets/images/logos/aws-logo.png'),
          graphQl: require('../../assets/images/logos/graphql-logo.svg'),
          express: require('../../assets/images/logos/express-logo.png'),
        },
        right: {
          nuxt: require('../../assets/images/logos/nuxt.png'),
          next: require('../../assets/images/logos/next-logo.svg'),
          mongo: require('../../assets/images/logos/mongodb-logo.svg'),
          redux: require('../../assets/images/logos/redux-logo.svg'),
          node: require('../../assets/images/logos/node-logo.svg'),
        },
      },
    }
  },
}
</script>

<style scoped></style>
