<script setup lang="ts">
useHead({
  title: 'Projects'
})

type ProjectStatus = 'pending' | 'active' | 'not-started' | 'canceled'

interface IProject {
  id?: string
  name: string
  url: string
  status: ProjectStatus
  description?: string
}

const projects = ref<IProject[]>([
  // {
  //    name: 'XCASTLE',
  //    url: 'https://xc.aspiryx.space/',
  //    status: 'pending'
  // },
  {
     name: 'TODO',
     url: 'https://todo.aspiryx.space/',
     status: 'active'
  },
])
</script>

<template>
  <div class="projects-page container flex-col gap-6 py-12 hidden lg:flex">
    <grid-container>
      <project-card
        v-for="(item, i) of projects"
        :key="i"
        :title="item.name"
        :to="item.url"
      />
    </grid-container>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  height: calc(100vh - $header-height);
}
</style>