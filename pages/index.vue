<script setup>
useHead({
  title: 'Home'
})
</script>

<template>
  <main class="min-h-full">
    <section class="hero flex flex-col justify-between py-24">
      <bento-grid-row class="max-h-40 gap-4 invisible lg:visible">
        <bento-grid-item class="rounded-e-md" title="Home" to="/" subtitle="~/" />
        <bento-grid-item class="rounded-md" title="Projects" to="/projects" subtitle="~/projects" />
        <bento-grid-item class="rounded-s-md" title="Github" to="https://github.com/psoglav" subtitle="~/github"
          target="_blank" />
      </bento-grid-row>

      <div class="w-max max-w-full relative group select-none flex flex-col items-center scale-75 md:scale-100">
        <h1
          class="username-back text-8xl text-black uppercase font-bold absolute left-1/2 -translate-x-1/2 translate-y-1/2 blur-sm">
          ASPIRYX
        </h1>
        <h1 class="text-xl uppercase text-center tracking-wider z-10">
          Andrey Danilenko
        </h1>
        <h1 class="username text-6xl text-white uppercase font-bold text-center z-10">
          ASPIRYX
        </h1>
        <p class="w-full max-w-max uppercase font-normal text-opacity-50 text-white mt-3 text-center z-10">
          Software Engineer | Visual Artist | Sound Researcher
        </p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .hero {
    min-height: calc(100svh - $header-height);
  }

  .username-back {
    font-family: MetalMacabre;
    filter: url(#filter-music);
  }

  .username {
    font-family: Michroma;
  }
}
</style>