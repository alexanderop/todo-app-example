<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../atoms/BaseInput.vue'
import BaseButton from '../atoms/BaseButton.vue'

const newTodo = ref('')
const emit = defineEmits<{
  (e: 'add-todo', value: string): void
}>()

const addTodo = () => {
  if (newTodo.value.trim()) {
    emit('add-todo', newTodo.value)
    newTodo.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="addTodo" class="mb-4">
    <BaseInput v-model="newTodo" placeholder="Enter a new todo" />
    <BaseButton type="submit">Add Todo</BaseButton>
  </form>
</template>