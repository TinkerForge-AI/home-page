<template>
  <MainLayout>
    <section class="container py-4">
      <h1 class="mb-4">Simple Blog Test</h1>
      
      <div v-if="pending" class="alert alert-info">Loading posts…</div>
      <div v-else-if="error" class="alert alert-danger">Error: {{ error.message }}</div>
      <div v-else>
        <p>Found {{ data ? data.length : 0 }} posts</p>
        <div v-for="post in data" :key="post.path" class="mb-3">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <small>{{ post.date }} - {{ post.type }} - {{ post.author }}</small>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'

const { data, pending, error } = await useAsyncData('simple-blog', async () => {
  try {
    console.log('Fetching blog posts...')
    // Try different approaches to get content
    const posts = await $fetch('/api/_content/query', {
      method: 'GET',
      params: {
        _path: '/blog'
      }
    }).catch(async () => {
      // Fallback approach
      try {
        return await $fetch('/api/_content/query/blog')
      } catch {
        return []
      }
    })
    console.log('Posts found:', posts)
    return Array.isArray(posts) ? posts : []
  } catch (err) {
    console.error('Error fetching posts:', err)
    return []
  }
})
</script>
