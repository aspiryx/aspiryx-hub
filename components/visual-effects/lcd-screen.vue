<script setup>
defineProps({
})
</script>

<template>
  <div class="lcd-screen"></div>
</template>

<style lang="scss" scoped>
.lcd-screen {
  position: fixed;
  inset: 0;
  width: 100svw;
  height: 100svh;
  z-index: 999;
  pointer-events: none;
  background-image: url('/assets/img/3.png');
  background-repeat: repeat;
  mix-blend-mode: color-burn;
  background-size: 3px;
}
</style>