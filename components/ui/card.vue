<script setup lang="ts">
defineProps<{
  to: string
}>()

const NuxtLink = defineNuxtLink({})
</script>

<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to"
    class="card"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.card {
  @apply cursor-pointer z-10 rounded-3xl relative select-none transition-all;
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