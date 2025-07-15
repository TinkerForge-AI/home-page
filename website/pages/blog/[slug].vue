<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogPost from '~/components/BlogPost.vue'

const route = useRoute()
const slug = route.params.slug as string

// Debug info
console.log('Blog slug param:', slug)

// Query using the correct API for Nuxt Content v3
const { data } = await useAsyncData(`blog-${slug}`, async () => {
  try {
    // Get all blog posts
    const allPosts = await queryCollection('blog').all()
    
    // Find the post with the matching path or slug
    const foundPost = allPosts.find((post: any) => {
      // Match by path with or without leading /blog/
      if (post._path === `/blog/${slug}` || post._path === slug) {
        console.log('Found post by path match:', post._path)
        return true
      }
      
      // Match by slug property
      if (post.slug === slug) {
        console.log('Found post by slug property:', post._path)
        return true
      }
      
      // Match by filename in path
      if (post._path?.split('/').pop() === slug) {
        console.log('Found post by filename match:', post._path)
        return true
      }
      
      return false
    })
    
    if (foundPost) {
      return foundPost
    }
    
    console.log('Content not found for slug:', slug)
    return null
  } catch (error) {
    console.error('Error fetching blog content:', error)
    return null
  }
})
</script>

<template>
  <BlogPost :data="data" backLink="/blog" />
</template>