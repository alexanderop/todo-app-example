<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Todo App</NuxtLink>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Back to List</NuxtLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ThemeToggle.vue'
</script>