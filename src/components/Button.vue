<script setup>
  defineProps({
    isPrimary: Boolean,
    hasShadow: Boolean,
    className: String,
  })
</script>

<template>
  <button :class="['font-medium rounded-[100px]', className, { 'bg-primary': isPrimary, 'shadow-custom': hasShadow }]">
    <slot></slot>
  </button>
</template>

<style>

</style>
