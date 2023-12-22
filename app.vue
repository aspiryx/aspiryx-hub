<template>
  <div class="dark:bg-black dark:text-white min-h-[100svh] overflow-hidden">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
    <svg-filters />
    <lcd-screen :blinking="false" />
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>