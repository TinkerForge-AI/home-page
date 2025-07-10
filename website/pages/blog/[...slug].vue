<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'

const route = useRoute()
const slug = route.params.slug as string[]
const path = `/${slug.join('/')}`

// Use queryCollection for Nuxt Content v3
const { data: page } = await useAsyncData(`blog-${path}`, async () => {
  try {
    // Use the correct collection and .path field
    const content = await queryCollection('blog')
      .path(path)
      .first()
    return content
  } catch (error) {
    console.error('Error fetching content:', error)
    return null
  }
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// SEO
useHead({
  title: () => page.value?.title ? `${page.value.title} - TinkerForge AI Blog` : 'Blog Post - TinkerForge AI',
  meta: [
    { name: 'description', content: () => page.value?.description || 'AI safety and research insights from TinkerForge AI' },
    { property: 'og:title', content: () => page.value?.title || 'Blog Post' },
    { property: 'og:description', content: () => page.value?.description || 'AI safety and research insights from TinkerForge AI' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: '/tinkerforge-avatar.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/tinkerforge-avatar.png' }
  ]
})
</script>

<!-- Dynamic blog post page -->
<template>
  <MainLayout>
    <article class="pt-24 pb-16 px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div v-if="!page" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
        
        <div v-else>
          <!-- Header -->
          <header class="mb-8">
            <div class="flex items-center mb-4">
              <NuxtLink to="/blog" class="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Blog
              </NuxtLink>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ page.title }}</h1>
            
            <div class="flex items-center space-x-4 text-neutral-400">
              <span v-if="page.date" class="text-sm">{{ formatDate(page.date) }}</span>
              <span v-if="page.author" class="text-sm">by {{ page.author }}</span>
              <span v-if="page.category" class="inline-block px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">{{ page.category }}</span>
            </div>
          </header>
          
          <!-- Content -->
          <div class="prose prose-lg prose-invert max-w-none">
            <ContentRenderer :value="page" />
          </div>
          
          <!-- Tags -->
          <div v-if="page.tags && page.tags.length" class="mt-8 pt-8 border-t border-neutral-800">
            <div class="flex items-center space-x-2">
              <span class="text-neutral-400 text-sm">Tags:</span>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in page.tags" :key="tag" class="inline-block px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </MainLayout>
</template>