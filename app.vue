<template>
  <div class="dark:bg-black dark:text-white h-full overflow-hidden">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>