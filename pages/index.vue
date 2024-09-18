<script setup>
useHead({
  title: 'Home'
})
</script>

<template>
  <main class="min-h-full">
    <section class="hero flex flex-col min-h-screen relative items-center py-24 gap-6">
      <bento-grid-row class="invisible lg:visible max-h-80">
        <bento-grid-item
          class="rounded-e-md"
          title="Projects"
          to="/projects"
          subtitle="~/projects"
        />
      </bento-grid-row>
      <bento-grid-row class="invisible lg:visible max-h-80">
        <bento-grid-item
          class="rounded-s-md"
          title="Github Profile"
          to="https://github.com/aspiryx"
          subtitle="~/github/aspiryx"
          target="_blank"
        />
        <bento-grid-item
          class="rounded-e-md"
          title="Telegram"
          to="https://t.me/aspiryxx"
          subtitle="~/tg/aspiryxx"
        />
      </bento-grid-row>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  .hero {
    min-height: calc(100svh - $header-height);
  }
}
</style>