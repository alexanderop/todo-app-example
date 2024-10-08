<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TodoList from '../components/organisms/TodoList'

interface Todo {
  id: number
  text: string
}

const todos = ref<Todo[]>([])

const fetchTodos = async () => {
  // Simulating API call
  todos.value = [
    { id: 1, text: 'Learn Vue.js' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Study Atomic Design' }
  ]
}

const addTodo = async (text: string) => {
  // Simulating API call
  const newTodoItem: Todo = {
    id: Date.now(),
    text
  }
  todos.value.push(newTodoItem)
}

const deleteTodo = async (id: number) => {
  // Simulating API call
  todos.value = todos.value.filter(todo => todo.id !== id)
}

onMounted(fetchTodos)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Todo App</h1>
    <TodoList 
      :todos="todos"
      @add-todo="addTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>