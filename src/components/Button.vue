<script setup>
  defineProps({
    isPrimary: Boolean,
    hasShadow: Boolean,
    className: String,
    onClick: Function
  })
</script>

<template>
  <button :class="['font-medium rounded-[100px]', className, { 'bg-primary': isPrimary, 'shadow-custom': hasShadow }]"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<style>

</style>
