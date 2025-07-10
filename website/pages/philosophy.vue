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
                class="w-12 h-12 rounded-full ring-2 ring-purple-500/30 glow-purple"
              >
              <div class="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse"></div>
            </div>
            <div>
              <h1 class="heading-secondary mb-2">
                Philosophy
              </h1>
              <p class="text-neutral-400 text-lg">Exploring the ethical foundations of artificial intelligence</p>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="flex items-center gap-6 text-sm text-neutral-500">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span>{{ posts?.length || 0 }} philosophical explorations</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              <span>Ethics & Values</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>Human-Centered AI</span>
            </div>
          </div>
        </div>

        <!-- Introduction Section -->
        <div class="card p-8 mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h2 class="text-2xl font-bold text-white">Our Philosophical Foundation</h2>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-neutral-300 mb-6 leading-relaxed">
                At TinkerForge AI, we believe that technological advancement must be grounded in solid ethical principles. 
                Our philosophical approach centers on creating AI systems that serve humanity while respecting fundamental 
                human values and dignity.
              </p>
              <p class="text-neutral-300 leading-relaxed">
                We explore the deep questions about consciousness, agency, responsibility, and the future of human-AI 
                collaboration through rigorous philosophical inquiry and practical research.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="card-secondary p-4 text-center">
                <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <p class="text-white font-medium text-sm">Human Values</p>
              </div>
              
              <div class="card-secondary p-4 text-center">
                <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <p class="text-white font-medium text-sm">Safety First</p>
              </div>
              
              <div class="card-secondary p-4 text-center">
                <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <p class="text-white font-medium text-sm">Innovation</p>
              </div>
              
              <div class="card-secondary p-4 text-center">
                <div class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                </div>
                <p class="text-white font-medium text-sm">Collaboration</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-16">
          <div class="flex flex-col items-center gap-4">
            <div class="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p class="text-neutral-400">Loading philosophical content...</p>
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
              <h3 class="text-white font-semibold mb-2">Error Loading Content</h3>
              <p class="text-neutral-400">{{ error.message }}</p>
            </div>
          </div>
        </div>
        
        <!-- No Results State -->
        <div v-else-if="!posts || posts.length === 0" class="card text-center py-12">
          <div class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Coming Soon</h3>
              <p class="text-neutral-400 mb-4">Our philosophical explorations are being prepared and will be available soon.</p>
              <NuxtLink to="/blog" class="btn-secondary text-sm px-4 py-2">
                Read Our Blog
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Philosophy Content Grid -->
        <div v-else>
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-xl font-bold text-white">Philosophical Explorations</h2>
            <div class="text-sm text-neutral-500">
              {{ posts.length }} {{ posts.length === 1 ? 'article' : 'articles' }}
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
              :type="'philosophy'"
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

// SEO using useSeoMeta
useSeoMeta({
  title: 'Philosophy - TinkerForge AI',
  description: 'Exploring the ethical and philosophical implications of artificial intelligence, human values, and the future of AI-human collaboration.',
  ogTitle: 'TinkerForge AI Philosophy',
  ogDescription: 'Exploring the ethical and philosophical foundations of artificial intelligence',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})

// Query philosophy content using Nuxt Content v3 API
const { data: posts, pending, error } = await useAsyncData('philosophy-posts', () =>
  queryCollection('philosophy')
    .order('date', 'DESC')
    .all()
)
</script>

<style scoped>
/* Purple glow effect for philosophy theme */
.glow-purple {
  filter: drop-shadow(0 0 6px rgba(147, 51, 234, 0.3));
}

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