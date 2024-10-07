<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  console.log('Page finished loading')
})
</script>