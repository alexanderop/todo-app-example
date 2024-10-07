<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Todo List</h1>
    <div class="mb-6">
      <form @submit.prevent="addTodo" class="flex space-x-2">
        <input
          v-model="newTodoTitle"
          type="text"
          placeholder="Enter new todo"
          class="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add Todo
        </button>
      </form>
    </div>
    <div v-if="isLoading" class="text-center">
      <p class="text-gray-600 dark:text-gray-400">Loading todos...</p>
    </div>
    <div v-else-if="error" class="text-center">
      <p class="text-red-600 dark:text-red-400">{{ error }}</p>
    </div>
    <ul v-else class="space-y-4">
      <li v-for="todo in todos" :key="todo.id" class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center">
        <NuxtLink :to="`/todo/${todo.id}`" class="flex-grow">
          <span>{{ todo.title }}</span>
        </NuxtLink>
        <button
          @click="removeTodo(todo.id)"
          class="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '~/store/todo'

const todoStore = useTodoStore()
const { todos, isLoading, error } = storeToRefs(todoStore)

const newTodoTitle = ref('')

const addTodo = () => {
  if (newTodoTitle.value.trim()) {
    todoStore.addTodo(newTodoTitle.value.trim())
    newTodoTitle.value = ''
  }
}

const removeTodo = (id: number) => {
  todoStore.removeTodo(id)
}

onMounted(async () => {
  await todoStore.fetchTodos()
})
</script>