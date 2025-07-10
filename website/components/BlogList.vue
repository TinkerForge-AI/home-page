<template>
  <div class="row g-3">
    <div v-for="post in posts" :key="post.path" class="col-12 col-md-6">
      <BlogCard
        :title="post.title"
        :summary="post.description || post.summary || ''"
        :to="post.path"
        :date="post.date"
        :type="post.type"
        :author="post.author"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue'
const props = defineProps<{ posts: any[] }>()
</script>
