<script setup lang="ts">
useHead({
  title: 'Bento Prototype'
})
</script>

<template>
  <div class="bento-page container flex-col gap-6 py-12 hidden lg:flex">
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
    <bento-grid-row>
      <bento-grid-item />
      <bento-grid-item />
      <bento-grid-item />
    </bento-grid-row>
  </div>
</template>

<style lang="scss" scoped>
.bento-page {
  height: calc(100vh - $header-height);
}
</style>