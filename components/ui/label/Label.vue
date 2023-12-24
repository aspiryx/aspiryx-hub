<script setup>
defineProps({
  modelValue: Boolean
})
</script>

<template>
  <label
    v-bind="$attrs"
    class="text-sm"
  >
    <slot />
  </label>
</template>