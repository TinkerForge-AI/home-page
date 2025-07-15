<template>
  <div class="row g-3">
    <div v-for="post in posts" :key="post._path || post.path" class="col-12 col-md-6">
      <BlogCard
        :title="post.title"
        :summary="post.description || post.summary || ''"
        :to="getPostUrl(post)"
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

// Improved function to get the correct URL for a post
function getPostUrl(post: any) {
  // If post already has a defined path from _path, use it
  if (post._path) {
    // Make sure it starts with /blog if needed
    return post._path.startsWith('/blog') ? post._path : `/blog${post._path}`
  }
  
  // If post has a slug property, use that
  if (post.slug) {
    return `/blog/${post.slug}`
  }
  
  // Fall back to extracting slug from the path if available
  if (post._path) {
    const pathParts = post._path.split('/')
    return `/blog/${pathParts[pathParts.length - 1]}`
  }
  
  // Last resort - try to use the filename from the path
  return `/blog/${post._id || 'unknown'}`
}
</script>
