<template>
  <MainLayout>
    <section class="section pt-24 text-light">
      <div class="container">
        <!-- Page Header -->
        <div class="mb-12">
          <div class="d-flex align-items-center gap-3 mb-4">
            <div class="position-relative">
              <img src="/tinkerforge-avatar.png" alt="TinkerForge AI Robot" class="rounded-circle border border-primary glow-blue" style="width:3rem;height:3rem;" />
            </div>
            <div>
              <h1 class="heading-secondary mb-2">Research</h1>
              <p class="text-secondary fs-5 mb-0">Advancing the frontier of AI safety and alignment</p>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="d-flex align-items-center gap-4 text-secondary small mb-3">
            <span class="d-flex align-items-center gap-1"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg> {{ posts?.length || 0 }} research papers</span>
            <span class="d-flex align-items-center gap-1"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> AI Safety Focus</span>
            <span class="d-flex align-items-center gap-1"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg> Open Access</span>
          </div>
        </div>

        <!-- Featured Research -->
        <div v-if="featuredResearch && featuredResearch.length > 0" class="mb-12">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            Featured Research
          </h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div 
              v-for="research in featuredResearch.slice(0, 2)" 
              :key="research._path"
              class="card-featured p-8"
            >
              <div class="badge badge-primary mb-4">Featured</div>
              <h3 class="text-2xl font-bold text-white mb-4">{{ research.title }}</h3>
              <p class="text-neutral-300 mb-6 leading-relaxed">{{ research.description || research.summary }}</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-neutral-500">
                  <div class="flex items-center gap-2 mb-1">
                    <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <time>{{ formatDate(research.date) }}</time>
                  </div>
                  <div v-if="research.author" class="flex items-center gap-2">
                    <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <span>{{ research.author }}</span>
                  </div>
                </div>
                <NuxtLink 
                  :to="`/research${research._path}`" 
                  class="btn-primary text-sm px-4 py-2"
                >
                  Read Research
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-16">
          <div class="flex flex-col items-center gap-4">
            <div class="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p class="text-neutral-400">Loading research...</p>
          </div>
        </div>
        
        <!-- Error State -->
        <div v-else-if="error" class="card border-red-500/20 bg-red-500/10 text-center py-12">
          <div class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <svg class="icon-md text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Error Loading Research</h3>
              <p class="text-neutral-400">{{ error.message }}</p>
            </div>
          </div>
        </div>
        
        <!-- No Results State -->
        <div v-else-if="!posts || posts.length === 0" class="card text-center py-12">
          <div class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center">
              <svg class="icon-md text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">No Research Available</h3>
              <p class="text-neutral-400 mb-4">No research publications are available at the moment.</p>
              <NuxtLink to="/contact" class="btn-secondary text-sm px-4 py-2">
                Get in Touch
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- All Research Grid -->
        <div v-else>
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-xl font-bold text-white">All Research</h2>
            <div class="text-sm text-neutral-500">
              {{ posts.length }} {{ posts.length === 1 ? 'publication' : 'publications' }}
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <BlogCard
              v-for="post in posts"
              :key="post.path"
              :title="post.title"
              :summary="post.description || post.summary"
              :to="`/blog${post.path}`"
              :date="post.date"
              :type="'research'"
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

// SEO using useSeoMeta (Nuxt 3 built-in)
useSeoMeta({
  title: 'Research - TinkerForge AI',
  description: 'Cutting-edge research in AI safety, alignment, and responsible development',
  ogTitle: 'TinkerForge AI Research',
  ogDescription: 'Cutting-edge research in AI safety, alignment, and responsible development',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})

// Query research content using Nuxt Content v3 API
const { data: posts, pending, error } = await useAsyncData('research-posts', () =>
  queryCollection('research')
    .order('date', 'DESC')
    .all()
)

// Get featured research (first 2 most recent)
const featuredResearch = computed(() => {
  if (!posts.value || !Array.isArray(posts.value)) return []
  return posts.value.slice(0, 2)
})

// Date formatting utility
function formatDate(date: string | Date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>