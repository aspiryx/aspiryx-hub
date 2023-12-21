<template>
  <div
    class="header-container border-b-gray-800 border-b z-50 backdrop-blur-lg sticky top-0 w-full bg-black bg-opacity-20">
    <header class="container flex justify-between items-center m-auto px-4">
      <div class="flex gap-16">
        <nuxt-link to="/" class="logo font-bold">. ASPIRYX</nuxt-link>
        <nav class="space-x-8">
          <nav-link to="/">Home</nav-link>
          <nav-link to="/projects">Projects</nav-link>
          <nav-link to="/locked">Store</nav-link>
          <nav-link to="/locked">Freebies</nav-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  header {
    height: calc($header-height - 1px); // cull bottom border
  }
}

.logo {
  font-family: Michroma; // TODO: convert the logo to svg, cuz this font is not used anywhere except logo
}
</style>