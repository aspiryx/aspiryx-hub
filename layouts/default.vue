<template>
  <div class="default-layout h-full">
    <app-header />
    <!-- <app-background /> -->
    <div class="page-wrapper container m-auto">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.default-layout {
  opacity: 0;
  animation: .5s .1s fade-in ease-out forwards;
}
</style>