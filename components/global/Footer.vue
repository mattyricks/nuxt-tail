<template>
  <!-- Footer -->
  <footer class="w-full md:p-24 sm:p-6 p-1">
    <div class="flex flex-col justify-around items-center">
      <div class="w-full flex flex-row sm:flex-row sm:justify-between">
        <div class="w-full flex flex-col place-items-start">
          <h5 class="sm:text-md text-sm">Location</h5>

          <address class="sm:text-sm text-xs">
            Brooklyn, NY<br />
            USA
          </address>
        </div>

        <div class="w-full flex flex-col place-items-end">
          <h5 class="sm:text-md text-sm">Say Hello</h5>

          <a class="sm:text-sm text-xs -mr-4">
            <router-link to="/contact">Contact</router-link>
          </a>
        </div>
      </div>

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
</template>

<script>
export default {}
</script>

<style></style>
