<template>
  <nuxt-link
    :to="$attrs.to || ''"
    class="font-medium text-foreground/50 hover:text-foreground"
  >
    <slot />
  </nuxt-link>
</template>