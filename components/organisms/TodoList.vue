<script setup lang="ts">
import TodoForm from '../molecules/TodoForm.vue'
import TodoItem from '../molecules/TodoItem.vue'

interface Todo {
  id: number
  text: string
}

defineProps<{
  todos: Todo[]
}>()

defineEmits<{
  (e: 'add-todo', value: string): void
  (e: 'delete-todo', id: number): void
}>()
</script>

<template>
  <div>
    <TodoForm @add-todo="$emit('add-todo', $event)" />
    <ul class="space-y-2">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="$emit('delete-todo', $event)"
      />
    </ul>
  </div>
</template>