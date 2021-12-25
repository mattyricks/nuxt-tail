<template>
  <div class="m-0 p-0 w-full h-full bg-slate-300">
    <div class="container">
      <div class="loading-screen">
        <div class="ringOne ring">
          <img :src="images.imageOne" alt="" />
        </div>
        <div class="ringTwo ring">
          <img :src="images.imageOne" alt="" />
        </div>
      </div>

      <div class="logo">
        <div class="logo-icon">
          <img src="" alt="" />
        </div>
      </div>

      <div class="contact">GET IN TOUCH</div>

      <div class="menu">
        <img src="" alt="" class="menu-icon" />
      </div>

      <div class="header">
        <h1 class="ml-7">
          <span class="text-wrapper">
            <span class="letters">The connected world</span>
          </span>
        </h1>

        <p id="tagline" class="p-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          tenetur alias reprehenderit animi laudantium quisquam laboriosam
          sapiente sunt, deleniti perferendis mollitia natus dicta? Repellat,
          suscipit? Numquam consequatur aperiam sapiente ratione!
        </p>

        <br />

        <p id="tagline" class="p-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          tenetur alias reprehenderit animi laudantium quisquam,
        </p>

        <div class="buttons">
          <button id="one">LEARN MORE</button>
          <button id="two">2021 by MattyCakes</button>
        </div>

        <div class="media">
          <ul>
            <li>links..</li>
            <li>links..</li>
            <li>links..</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: {
        imageOne: require('../assets/images/ring.png'),
        imageTwo: require('../assets/images/hero.jpeg'),
      },
    }
  },
}
</script>
