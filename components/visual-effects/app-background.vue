<template>
  <div class="app-background">
    <div class="blue-circ shape-bottom rounded-full"></div>
    <div class="blue-circ shape-top rounded-full"></div>
    <div class="shape-2 rounded-full">
      <div class="circ circ-1"></div>
      <div class="circ circ-2"></div>
      <div class="circ circ-3"></div>
      <div class="circ circ-4"></div>
      <div class="circ circ-5"></div>
      <div class="circ circ-6"></div>
      <div class="circ circ-7"></div>
      <div class="circ circ-8"></div>
    </div>
    <div class="shape-3 rounded-full">
      <div class="circ circ-5"></div>
      <div class="circ circ-6"></div>
      <div class="circ circ-7"></div>
      <div class="circ circ-8"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fade-in {
  from {
    translate: -50% 50%;
    opacity: 0.8;
  }

  to {
    translate: -50% calc(50% - 300px);
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    translate: -50% calc(50% - 300px);
    opacity: 0;
  }

  to {
    translate: -50% 50%;
    opacity: 1;
  }
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

.blue-circ {
  background: color-mix(in srgb, #433FFF 46%, transparent);
  filter: blur(100px);
  z-index: 0;
  aspect-ratio: 1/1;
  translate: -50% 50%;
}

.shape-bottom {
  position: fixed;
  opacity: 0.8;
  bottom: -90%;
  left: 50%;
  width: min(max(1500px, 80vw), 1700px);

  animation: 1s 0s fade-in $easeOutCirc forwards;
}

.shape-top {
  position: fixed;
  top: -200%;
  left: 50%;
  opacity: 0;
  width: min(max(1000px, 80vw), 1700px);
  filter: blur(200px);
  animation: 3s fade-out $easeInOutCirc forwards;
}

.shape-2,
.shape-3 {
  position: fixed;
  bottom: -100%;
  left: 50%;
  z-index: 0;
  width: min(max(1000px, 80vw), 1400px);
  aspect-ratio: 1/1;
  flex-shrink: 0;
  scale: 0.8;

  translate: -50% calc(50% - 300px);

  animation: 10s 0.1s rotate linear infinite;

  .circ {
    position: absolute;
    width: 100px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: color-mix(in srgb, #433FFF 46%, transparent);
    filter: blur(100px);
    background: black;
  }

  .circ-1 {
    right: 0;
    top: 0;
    width: 100px;
  }

  .circ-2 {
    left: 0;
    top: 0;
    width: 90px;
  }

  .circ-3 {
    left: 10%;
    bottom: 0;
    width: 110px;
  }

  .circ-4 {
    right: 0;
    bottom: -10%;
    width: 30px;
  }

  .circ-5 {
    right: 50%;
    bottom: -5%;
    width: 120px;
  }

  .circ-6 {
    left: 50%;
    bottom: -20%;
    width: 30px;
  }

  .circ-7 {
    right: -20%;
    bottom: 50%;
    width: 150px;
  }

  .circ-8 {
    left: -10%;
    bottom: -50%;
    width: 130px;
  }
}

.shape-3 {
  animation: 8s rotate linear infinite;
}
</style>