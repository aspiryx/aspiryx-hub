<script setup>
useHead({
  title: 'Projects'
})
</script>

<template>
  <div class="projects-page container flex-col gap-6 py-12 hidden lg:flex">
    <bento-grid-row>
      <bento-grid-item
        title="ToDo"
        to="https://todo.aspiryx.space/"
      />
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="001"
      />
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="002"
      />
    </bento-grid-row>

    <bento-grid-row>
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="003"
      />
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="004"
      />
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="005 [CORRUPTED]"
        corrupted
      />
    </bento-grid-row>

    <bento-grid-row>
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="006"
      />
      <bento-grid-item
        title="PROJECT FILE"
        subtitle="007"
      />
    </bento-grid-row>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  height: calc(100vh - $header-height);
}
</style>