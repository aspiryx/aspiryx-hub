<template>
  <div class="grid-container w-full gap-6">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
</style>