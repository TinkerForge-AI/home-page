<template>
  <div>
    <h1>Debug Content</h1>
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('debug-content', async () => {
  try {
    // Use queryCollection for Nuxt Content v3
    const posts = await queryCollection('blog').all()
    return posts
  } catch (error: any) {
    return { error: error.message }
  }
})
</script>