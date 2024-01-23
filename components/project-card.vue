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
    ref="bento-grid-item"
    :to="to"
    :class="{ corrupted }"
    class="bento-grid-item group"
    v-bind="$attrs"
  >
    <span
      class="title group-hover:text-opacity-100"
    >
      {{ title }}
    </span>
    <span
      class="subtitle text-zinc-600 group-hover:text-opacity-80 font-medium text-lg absolute bottom-4 right-4"
    >
      {{ subtitle }}
    </span>
  </ui-card>
</template>

<style lang="scss" scoped>
.bento-grid-item {
  @apply cursor-pointer z-10 rounded-3xl relative select-none h-48 transition-all max-w-3xl;
  @apply border border-foreground/20 hover:border-foreground/50 active:border-foreground;
  @apply outline outline-0 outline-foreground/10 hover:outline-8 active:outline-2 active:outline-foreground/30;
  @apply bg-foreground/5 backdrop-blur-3xl hover:bg-transparent;

  .title {
    @apply text-opacity-40 font-medium text-xl absolute bottom-4 left-4;
    transition: 200ms color ease;
  }

  &.corrupted {
    @apply border-destructive/20 hover:border-destructive/50 active:border-destructive;
    @apply outline-destructive/10 active:outline-destructive/30;
    @apply bg-destructive/5;

    span {
      animation: 2s err-color linear infinite;
    }

    &:hover {
      filter: url(#filter-music);
    }
  }
}

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
</style>