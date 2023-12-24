<script setup>
const modelValue = defineModel()
</script>

<template>
  <input
    v-bind="$attrs"
    v-model="modelValue"
    class="checkbox"
    type="checkbox"
  >
</template>

<style lang="scss" scoped>
.checkbox {
  appearance: none;
  position: relative;
  width: 16px;
  border: 1px white solid;
  border-radius: 3px;
  aspect-ratio: 1/1;

  &:checked::before {
    --cl: color-mix(in srgb, white 40%, transparent);
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    aspect-ratio: 1/1;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background-color: var(--cl);
    mix-blend-mode: lighten;
    box-shadow: 0 0 20px 5px color-mix(in srgb, var(--cl) 70%, transparent);
  }

  // &:checked {
  //   background-color: $accent-40;
  // }
}
</style>