<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'danger'
}>()
</script>

<template>
  <button
    :class="[
      'p-2 rounded transition duration-300',
      variant === 'danger'
        ? 'bg-red-500 hover:bg-red-600 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white'
    ]"
  >
    <slot></slot>
  </button>
</template>