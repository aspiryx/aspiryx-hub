<script setup>
useHead({
  title: 'Home'
})
</script>

<template>
  <main class="min-h-full">
    <section class="hero flex flex-col justify-between py-24">
      <bento-grid-row class="max-h-40 gap-4 invisible lg:visible">
        <bento-grid-item
          class="rounded-e-md"
          title="Projects"
          to="/projects"
          subtitle="~/projects"
        />
        <bento-grid-item
          class="rounded-s-md"
          title="Github"
          to="https://github.com/psoglav"
          subtitle="~/github/psoglav"
          target="_blank"
        />
      </bento-grid-row>

      <bio-type />
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
}
</style>