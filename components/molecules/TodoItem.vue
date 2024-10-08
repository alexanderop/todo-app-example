<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue'

defineProps<{
  todo: { id: number; text: string }
}>()
defineEmits<{
  (e: 'delete-todo', id: number): void
}>()
</script>

<template>
  <li class="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded shadow-sm">
    <span class="text-gray-800 dark:text-gray-200">{{ todo.text }}</span>
    <BaseButton @click="$emit('delete-todo', todo.id)" variant="danger">Delete</BaseButton>
  </li>
</template>