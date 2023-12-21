<template>
  <main class="min-h-full h-[100vh]">
    <img src="/assets/img/1.png" class="abr absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
  </main>
</template>

<style lang="scss" scoped >
@keyframes fly {
  0% {
    translate: 0 -10%;
  }

  50% {
    translate: 0 10%;
  }

  100% {
    translate: 0 -10%;
  }
}

@keyframes glitch {
  0% {
    filter: none;
  }

  2% {
    filter: url(#filter-glitch-1);
  }

  4% {
    filter: none;
  }

  30% {
    filter: url(#filter-glitch-1);
  }

  40% {
    filter: none;
  }

  80% {
    filter: url(#filter-glitch-1);
  }

  100% {
    filter: none;
  }
}

.abr {
  animation: 15s fly $easeInOutCirc infinite, 5s glitch $easeInOutCirc infinite;
  translate: 0 -10%;
}
</style>