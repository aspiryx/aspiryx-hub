<template>
  <div class="projects-page container flex flex-col gap-6 py-12">
    <bento-grid-row>
      <bento-grid-item title="Home" to="/" />
      <bento-grid-item />
      <bento-grid-item />
    </bento-grid-row>

    <bento-grid-row>
      <bento-grid-item />
      <bento-grid-item />
      <bento-grid-item />
    </bento-grid-row>

    <bento-grid-row>
      <bento-grid-item />
      <bento-grid-item />
      <bento-grid-item />
    </bento-grid-row>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  height: calc(100vh - $header-height);
}
</style>