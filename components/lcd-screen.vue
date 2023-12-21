<template>
  <div class="lcd-screen"></div>
</template>

<style lang="scss" scoped>
@keyframes blink {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}

.lcd-screen {
  position: fixed;
  inset: 0;
  width: 100svw;
  height: 100svh;
  z-index: 999;
  pointer-events: none;
  background-image: url('/assets/img/2.png');
  background-repeat: repeat;
  mix-blend-mode: color-burn;
  background-size: 3px;
  animation: 40ms blink linear infinite forwards;
}
</style>