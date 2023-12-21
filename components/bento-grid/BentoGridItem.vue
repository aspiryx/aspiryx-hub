<script>
export default {
  props: {
    title: String,
    to: String,
    subtitle: String,

  },
  setup() {
    const cell = ref()

    return {
      cell
    }
  }
}
</script>

<template>
  <nuxt-link :to="to"
    class="bento-grid-item cursor-pointer group z-10 rounded-3xl bg-white bg-opacity-5 hover:bg-opacity-[0.025] p-6 relative"
    ref="bento-grid-item" v-bind="$attrs">
    <span
      class="title text-opacity-40 text-white group-hover:text-opacity-100 font-medium text-xl absolute bottom-4 left-4">
      {{ title }}
    </span>
    <span
      class="title text-opacity-20 text-white group-hover:text-opacity-80 font-medium text-lg absolute bottom-4 right-4">
      {{ subtitle }}
    </span>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.bento-grid-item {
  border: 1px rgba(255, 255, 255, 0.1) solid;
  // backdrop-filter: blur(120px); // not working due to page blur
  transition: background-color 150ms ease, flex-basis 150ms ease, font-size 150ms ease, outline 200ms ease;
  flex-basis: 100%;
  outline: 0px rgba(255, 255, 255, 0.1) solid;

  .title {
    transition: 200ms color ease;
  }

  &:hover {
    // background-color: rgba(255, 255, 255, 0.05);
    flex-basis: 120%;
    border: 1px rgba(255, 255, 255, 0.4) solid;

    outline: 6px rgba(255, 255, 255, 0.1) solid;
  }

  &:active {
    outline: 2px rgba(255, 255, 255, 0.5) solid;
  }

  // background: radial-gradient(circle at -1050px 50px, rgba(255, 255, 255, 0.1), transparent 80%);
}
</style>