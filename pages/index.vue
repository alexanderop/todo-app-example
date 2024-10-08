<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Todo App</h1>
    
    <!-- Add Todo Form -->
    <form @submit.prevent="addTodo" class="mb-4">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Enter a new todo"
        class="border p-2 mr-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
      />
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-300">
        Add Todo
      </button>
    </form>
    
    <!-- Todo List -->
    <ul class="space-y-2">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded shadow-sm"
      >
        <span class="text-gray-800 dark:text-gray-200">{{ todo.text }}</span>
        <button
          @click="deleteTodo(todo.id)"
          class="bg-red-500 hover:bg-red-600 text-white p-1 rounded transition duration-300"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Todo {
  id: number
  text: string
}

const newTodo = ref('')
const todos = ref<Todo[]>([])

const fetchTodos = async () => {
  // Simulating API call
  todos.value = [
    { id: 1, text: 'Learn Vue.js' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Study Atomic Design' }
  ]
}

const addTodo = async () => {
  if (newTodo.value.trim()) {
    // Simulating API call
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo.value
    }
    todos.value.push(newTodoItem)
    newTodo.value = ''
  }
}

const deleteTodo = async (id: number) => {
  // Simulating API call
  todos.value = todos.value.filter(todo => todo.id !== id)
}

onMounted(fetchTodos)
</script>