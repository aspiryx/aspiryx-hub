<template>
  <div class="bento-grid-row flex w-full flex-grow gap-6">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.bento-grid-row {
  flex-basis: 100%;
  transition: flex-basis 200ms ease;

  &:hover {
    flex-basis: 150%;
  }
}
</style>