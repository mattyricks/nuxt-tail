<template>
  <div class="flex flex-col items-center justify-center bg-pink-300">
    <h1>Hello</h1>
    <button>Click Left</button>
    <button>Click Right</button>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.params.id < +from.params.id ? 'slide-right' : 'slide-left'
  },
}
</script>

<style></style>
