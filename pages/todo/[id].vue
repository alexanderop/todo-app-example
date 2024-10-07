<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Todo Details</h1>
    <div v-if="isLoading" class="text-center">
      <p class="text-gray-600 dark:text-gray-400">Loading todo details...</p>
    </div>
    <div v-else-if="error" class="text-center">
      <p class="text-red-600 dark:text-red-400">{{ error }}</p>
    </div>
    <div v-else-if="todo" class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">{{ todo.title }}</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ todo.description }}</p>
      <p class="text-sm text-gray-500 dark:text-gray-400">Status: {{ todo.completed ? 'Completed' : 'Pending' }}</p>
    </div>
    <div v-else class="text-center">
      <p class="text-gray-600 dark:text-gray-400">Todo not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '~/store/todo'

const route = useRoute()
const todoStore = useTodoStore()
const { currentTodo: todo, isLoading, error } = storeToRefs(todoStore)

onMounted(async () => {
  const id = Number(route.params.id)
  await todoStore.fetchTodoById(id)
})

definePageMeta({
  layout: 'todo-detail'
})
</script>