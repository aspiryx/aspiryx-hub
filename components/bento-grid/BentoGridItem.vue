<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
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
  <ui-card
    :to="to"
    :class="{ corrupted }"
    class="bento-grid-item group"
    v-bind="$attrs"
  >
    <span
      class="title group-hover:text-opacity-100 absolute top-4 left-5"
    >
      {{ title }}
    </span>
    <span
      class="subtitle text-zinc-600 group-hover:text-opacity-80 font-medium text-lg absolute top-4 right-6"
    >
      {{ subtitle }}
    </span>
  </ui-card>
</template>

<style lang="scss" scoped>
.bento-grid-item {
  flex-basis: 100%;

  .title {
    transition: 200ms color ease;
  }

  &:hover {
    flex-basis: 130%;
  }
}
</style>