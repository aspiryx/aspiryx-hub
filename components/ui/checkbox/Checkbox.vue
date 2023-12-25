<script setup>
defineEmits(['update:model-value'])

const { modelValue } = defineProps({
  modelValue: Boolean
})
</script>

<template>
  <input
    v-bind="$attrs"
    class="checkbox"
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:model-value', $event.target.checked)"
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
  }
}
</style>