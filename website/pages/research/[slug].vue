<template>
  <BlogPost :data="data" backLink="/research" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogPost from '~/components/BlogPost.vue'

const route = useRoute()
const slug = route.params.slug

const { data } = await useAsyncData(`research-${slug}`, async () => {
  try {
    // Get all research posts
    const allPosts = await queryCollection('research').all()
    
    // Find the post with the matching path or slug
    const foundPost = allPosts.find((post: any) => {
      // Match by path with or without leading /research/
      if (post._path === `/research/${slug}` || post._path === slug) {
        console.log('Found research post by path match:', post._path)
        return true
      }
      
      // Match by slug property
      if (post.slug === slug) {
        console.log('Found research post by slug property:', post._path)
        return true
      }
      
      // Match by filename in path
      if (post._path?.split('/').pop() === slug) {
        console.log('Found research post by filename match:', post._path)
        return true
      }
      
      return false
    })
    
    if (foundPost) {
      return foundPost
    }
    
    console.log('Research content not found for slug:', slug)
    return null
  } catch (error) {
    console.error('Error fetching research content:', error)
    return null
  }
})
</script>
