<script>
export default {
  props: {
    title: String,
    to: String,
    subtitle: String,
    corrupted: Boolean
  },
  setup() {
    const cell = ref()

    return {
      cell,
    }
  }
}
</script>

<template>
  <nuxt-link :to="to" @mouseover="() => isHovered = true" @mouseleave="() => isHovered = false" :style="css"
    :class="{ corrupted }" class="bento-grid-item cursor-pointer group z-10 rounded-3xl relative select-none"
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
@keyframes err-color {
  0% {
    color: inherit !important;
  }

  10% {
    color: red !important;
  }

  20% {
    color: inherit !important;
  }

  30% {
    color: red !important;
  }

  40% {
    color: inherit !important;
  }

  100% {
    color: inherit !important;
  }
}

.bento-grid-item {
  border: 1px rgba(255, 255, 255, 0.1) solid;
  transition: background-color 150ms ease, flex-basis 150ms ease, font-size 150ms ease, outline 200ms ease;
  flex-basis: 100%;
  outline: 0px rgba(255, 255, 255, 0.1) solid;

  background: color-mix(in srgb, white 5%, transparent);

  // bg-white bg-opacity-5 hover:bg-opacity-[0.025] active:bg-opacity-10 p-6

  .title {
    transition: 200ms color ease;
  }

  &:hover {
    // background-color: rgba(255, 255, 255, 0.05);
    flex-basis: 130%;
    border: 1px color-mix(in srgb, white 40%, transparent) solid;
    outline: 6px color-mix(in srgb, white 10%, transparent) solid;
    background: color-mix(in srgb, white 2.5%, transparent);
  }

  &:active {
    outline: 2px color-mix(in srgb, white 50%, transparent) solid;
    background: color-mix(in srgb, white 10%, transparent);
  }

  &.corrupted {
    --cl: rgb(255, 72, 102);

    span {
      animation: 2s err-color linear infinite;
    }

    border: 1px rgba(255, 255, 255, 0.1) solid;
    outline: 0px rgba(255, 255, 255, 0.1) solid;
    background: color-mix(in srgb, var(--cl) 5%, transparent);

    &:hover {
      filter: url(#filter-music);

      border: 1px color-mix(in srgb, var(--cl) 40%, transparent) solid;
      outline: 6px color-mix(in srgb, var(--cl) 10%, transparent) solid;
      background: color-mix(in srgb, var(--cl) 2.5%, transparent);
    }

    &:active {
      outline: 2px color-mix(in srgb, var(--cl) 50%, transparent) solid;
      background: color-mix(in srgb, var(--cl) 10%, transparent);
    }
  }

  // background: radial-gradient(circle at -1050px 50px, rgba(255, 255, 255, 0.1), transparent 80%);
}
</style>