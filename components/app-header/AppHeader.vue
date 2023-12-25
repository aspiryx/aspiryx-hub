<script setup>
const immersiveMode = useImmersiveMode()
</script>

<template>
  <div
    class="header-container border-b-gray-800 border-b z-50 backdrop-blur-lg sticky top-0 w-full bg-black bg-opacity-20"
  >
    <header class="container flex justify-between items-center m-auto px-4">
      <div class="flex gap-16">
        <logo />
        <nav-menu />
      </div>
      <div class="immersive-mode flex items-center gap-2 select-none text-white text-opacity-90 hover:text-opacity-100 ">
        <ui-label for="immersive-mode">
          IMMERSIVE MODE
        </ui-label>
        <ui-checkbox
          id="immersive-mode"
          v-model="immersiveMode"
        />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  header {
    height: calc($header-height - 1px); // considering bottom border
  }
}

.logo {
  font-family: Michroma; // TODO: convert the logo to svg, cuz this font is not used anywhere except logo
}
</style>