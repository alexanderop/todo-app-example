<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    type="text"
    :placeholder="placeholder"
    class="border p-2 mr-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
  />
</template>