import { defineStore } from 'pinia'

interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    currentTodo: null as Todo | null,
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchTodos() {
      this.isLoading = true
      this.error = null
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.todos = [
          { id: 1, title: 'Learn Vue 3', description: 'Study Vue 3 fundamentals', completed: false },
          { id: 2, title: 'Build a Todo App', description: 'Create a todo app using Vue 3 and Nuxt', completed: false },
          { id: 3, title: 'Master Pinia', description: 'Learn state management with Pinia', completed: false },
        ]
      } catch (error) {
        this.error = 'Failed to fetch todos'
      } finally {
        this.isLoading = false
      }
    },
    async fetchTodoById(id: number) {
      this.isLoading = true
      this.error = null
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000))
        const todo = this.todos.find(t => t.id === id)
        if (todo) {
          this.currentTodo = todo
        } else {
          throw new Error('Todo not found')
        }
      } catch (error) {
        this.error = 'Failed to fetch todo details'
      } finally {
        this.isLoading = false
      }
    },
    addTodo(title: string) {
      const newTodo: Todo = {
        id: Date.now(),
        title,
        description: '',
        completed: false,
      }
      this.todos.push(newTodo)
    },
    removeTodo(id: number) {
      const index = this.todos.findIndex(todo => todo.id === id)
      if (index !== -1) {
        this.todos.splice(index, 1)
      }
    },
  },
})