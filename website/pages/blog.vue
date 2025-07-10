<template>
  <MainLayout>
    <section class="section pt-24 text-light">
      <div class="container">
        <!-- Page Header -->
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-6">
            <div class="relative">
              <img 
                src="/tinkerforge-avatar.png" 
                alt="TinkerForge AI Robot" 
                class="w-12 h-12 rounded-full ring-2 ring-blue-500/30 glow-blue"
              />
              <div class="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
            </div>
            <div>
              <h1 class="heading-secondary mb-2">
                Blog
              </h1>
              <p class="text-neutral-400 text-lg">Latest insights on AI safety, research, and development</p>
            </div>
          </div>
          <!-- Stats -->
          <div class="flex items-center gap-6 text-sm text-neutral-500">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
              <span>{{ allContent?.length || 0 }} articles</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.997 1.997 0 013 12V7a4 4 0 014-4z"/>
              </svg>
              <span>Multiple categories</span>
            </div>
          </div>
        </div>
        <!-- Filter Section -->
        <div class="mb-8">
          <BlogFilter :type="type" @update:type="onTypeChange" />
        </div>
        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-16">
          <div class="flex flex-col items-center gap-4">
            <div class="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p class="text-neutral-400">Loading articles...</p>
          </div>
        </div>
        <!-- Error State -->
        <div v-else-if="error" class="card border-red-500/20 bg-red-500/10 text-center py-12">
          <div class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Error Loading Articles</h3>
              <p class="text-neutral-400">{{ error.message }}</p>
            </div>
          </div>
        </div>
        <!-- No Results State -->
        <div v-else-if="filteredPosts.length === 0" class="card text-center py-12">
          <div class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">No Articles Found</h3>
              <p class="text-neutral-400 mb-4">
                {{ type && type !== 'All' ? `No posts found for "${type}" category.` : 'No articles available at the moment.' }}
              </p>
              <button 
                v-if="type && type !== 'All'" 
                @click="type = ''" 
                class="btn-secondary text-sm px-4 py-2"
              >
                Show All Articles
              </button>
            </div>
          </div>
        </div>
        <!-- Articles Grid -->
        <div v-else>
          <!-- Results Summary -->
          <div class="mb-8 text-sm text-neutral-500">
            Showing {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'article' : 'articles' }}
            <span v-if="type && type !== 'All'"> in "{{ type }}" category</span>
          </div>
          <!-- Articles -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <BlogCard
              v-for="post in filteredPosts" 
              :key="post.path"
              :title="post.title"
              :summary="post.description || post.summary"
              :to="post.path"
              :date="post.date"
              :type="post.category || 'blog'"
              :author="post.author"
              class="fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'
import BlogCard from '~/components/BlogCard.vue'
import BlogFilter from '~/components/BlogFilter.vue'

// SEO meta tags with TinkerForge AI branding
useHead({
  title: 'Blog - TinkerForge AI',
  meta: [
    { name: 'description', content: 'Latest insights on AI safety, research, and development from TinkerForge AI. Explore our articles on alignment, interpretability, and AI safety methodologies.' },
    { property: 'og:title', content: 'TinkerForge AI Blog' },
    { property: 'og:description', content: 'Latest insights on AI safety, research, and development' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/tinkerforge-avatar.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/tinkerforge-avatar.png' }
  ]
})

// Reactive filter state
const type = ref('')
const onTypeChange = (val: string) => {
  type.value = val
}

// Fetch all blog posts using Nuxt Content v3 API (Nuxt Content v3)
const { data: allContent, pending, error } = await useAsyncData('all-blog-content', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
) 

// Computed filtered posts
const filteredPosts = computed(() => {
  if (!allContent.value || !Array.isArray(allContent.value)) return []
  if (!type.value || type.value === 'All') return allContent.value

  // Filter by category field
  return allContent.value.filter((post: any) => {
    return post.category?.toLowerCase() === type.value.toLowerCase()
  })
})

// SEO using useSeoMeta (Nuxt 3 built-in)
useSeoMeta({
  title: 'Blog - TinkerForge AI',
  description: 'Latest insights on AI safety, research, and development from TinkerForge AI',
  ogTitle: 'TinkerForge AI Blog',
  ogDescription: 'Latest insights on AI safety, research, and development',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})
</script>

<style scoped>
/* Fade in animation for articles */
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for multiple cards */
.fade-in:nth-child(2) { animation-delay: 0.1s; }
.fade-in:nth-child(3) { animation-delay: 0.2s; }
.fade-in:nth-child(4) { animation-delay: 0.3s; }
.fade-in:nth-child(5) { animation-delay: 0.4s; }
.fade-in:nth-child(6) { animation-delay: 0.5s; }
</style>
