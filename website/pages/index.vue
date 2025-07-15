<template>
  <MainLayout>
    <!-- Hero Section -->
    <section class="relative section pt-32 pb-20 overflow-hidden">
      <!-- Hero background effects -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 opacity-60"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div class="container relative z-10">
        <div class="text-center max-w-5xl mx-auto">
          <div class="mb-8 fade-in">
            <RobotMascot class="mx-auto" />
          </div>
          
          <h1 class="heading-primary mb-8 slide-up">
            Redefining 
            <span class="text-gradient">AI Safety</span>
          </h1>
          
          <p class="text-xl text-neutral-300 max-w-4xl mx-auto mb-12 leading-relaxed slide-up" style="animation-delay: 0.2s;">
            Building a transparent, open, and hands-on research lab for safe, human-aligned AI systems. 
            Join us in advancing methodologies that prioritize interpretability, robustness, and alignment.
          </p>
          
          <div class="flex flex-col gap-6 justify-center items-center scale-in" style="animation-delay: 0.4s;">
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/research" class="btn-primary text-lg px-8 py-4">
                <span class="d-flex align-items-center gap-2">
                  View Research
                  <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </NuxtLink>
              <NuxtLink to="/about" class="btn-secondary text-lg px-8 py-4">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-alt">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">12+</div>
            <div class="text-neutral-400 text-sm">Research Papers</div>
          </div>
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-bold text-gradient-success mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
            <div class="text-neutral-400 text-sm">AI Safety Models</div>
          </div>
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-bold text-gradient-warm mb-2 group-hover:scale-110 transition-transform duration-300">Open</div>
            <div class="text-neutral-400 text-sm">Source First</div>
          </div>
          <div class="text-center group">
            <div class="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div class="text-neutral-400 text-sm">Transparent</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenge Section -->
    <section class="section bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="heading-secondary mb-6">
            The Challenge of AI Safety
          </h2>
          <p class="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            AI systems generate hallucinations and inadvertently leak sensitive information, 
            compromising their reliability and raising significant obstacles to building reliable automation.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card text-center">
            <div class="d-flex align-items-center justify-content-center mx-auto mb-4" style="width:3rem;height:3rem;background:rgba(239,68,68,0.15);border-radius:1rem;">
              <svg class="icon-md text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Unpredictable</h3>
            <p class="text-neutral-400 leading-relaxed">AI systems generate hallucinations and inadvertently leak sensitive information, compromising reliability.</p>
          </div>
          
          <div class="card text-center">
            <div class="d-flex align-items-center justify-content-center mx-auto mb-4" style="width:3rem;height:3rem;background:rgba(251,146,60,0.15);border-radius:1rem;">
              <svg class="icon-md text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Incoherent</h3>
            <p class="text-neutral-400 leading-relaxed">AI responses are inconsistent in their outputs and reasoning, creating interaction challenges.</p>
          </div>
          
          <div class="card text-center">
            <div class="d-flex align-items-center justify-content-center mx-auto mb-4" style="width:3rem;height:3rem;background:rgba(253,224,71,0.15);border-radius:1rem;">
              <svg class="icon-md text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Inept</h3>
            <p class="text-neutral-400 leading-relaxed">Systems fail on basic tasks, raising significant obstacles to building reliable automation.</p>
          </div>
          
          <div class="card text-center">
            <div class="d-flex align-items-center justify-content-center mx-auto mb-4" style="width:3rem;height:3rem;background:rgba(139,92,246,0.15);border-radius:1rem;">
              <svg class="icon-md text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Uninterpretable</h3>
            <p class="text-neutral-400 leading-relaxed">AI's inner workings remain opaque, making it difficult to trust outputs and debug errors.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Research Section -->
    <section class="section">
      <div class="container">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="heading-tertiary mb-2">Latest Research</h2>
            <p class="text-neutral-400">Breakthrough findings in AI safety and alignment</p>
          </div>
          <NuxtLink to="/research" class="btn-link">
            <span class="flex items-center gap-2">
              View All Research
              <svg class="icon-sm group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </NuxtLink>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="(featuredResearch ?? []).length > 0">
          <ResearchCard 
            v-for="research in (featuredResearch ?? []).slice(0, 3)" 
            :key="research.path"
            :title="research.title"
            :summary="research.description"
            :to="`/research/${research.path}`"
            :date="research.date"
            :category="'Research'"
          />
        </div>
        
        <!-- Fallback for when no research content is available -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card-featured" v-for="n in 3" :key="n">
            <div class="badge badge-primary mb-4">Research</div>
            <h3 class="text-xl font-semibold text-white mb-3">AI Safety Research Project {{ n }}</h3>
            <p class="text-neutral-400 mb-4">Advanced AI safety research exploring novel approaches to alignment and interpretability through innovative methodologies.</p>
            <div class="text-sm text-neutral-500">
              <time>{{ new Date().toLocaleDateString() }}</time>
              <span class="mx-2">•</span>
              <span>TinkerForge Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="section-alt">
      <div class="container">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="heading-tertiary mb-2">From the Blog</h2>
            <p class="text-neutral-400">Insights and updates on AI safety research</p>
          </div>
          <NuxtLink to="/blog" class="btn-link group">
            <span class="flex items-center gap-2">
              View All Posts
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </NuxtLink>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="(featuredBlog ?? []).length > 0">
          <BlogCard 
            v-for="post in (featuredBlog ?? []).slice(0, 3)" 
            :key="post.path"
            :title="post.title"
            :summary="post.description"
            :to="getBlogPostUrl(post)"
            :date="post.date"
            :author="post.author"
            :type="post.category || 'Blog'"
          />
        </div>
        
        <!-- Fallback for when no blog content is available -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card" v-for="n in 3" :key="n">
            <div class="badge badge-secondary mb-4">Blog</div>
            <h3 class="text-xl font-semibold text-white mb-3">AI Safety Insights {{ n }}</h3>
            <p class="text-neutral-400 mb-4">Latest insights and updates on AI safety research, methodologies, and findings from our team.</p>
            <div class="text-sm text-neutral-500">
              <time>{{ new Date().toLocaleDateString() }}</time>
              <span class="mx-2">•</span>
              <span>TinkerForge Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-br from-blue-600/10 via-neutral-950 to-cyan-600/10">
      <div class="container-narrow text-center">
        <div class="card-featured p-12">
          <h2 class="heading-secondary mb-6">
            Join Us in Building Safer AI
          </h2>
          <p class="text-xl text-neutral-300 mb-8 leading-relaxed">
            Support our mission to advance AI safety through transparent, open research. 
            Every contribution helps us build more reliable and human-aligned AI systems.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink to="/support-us" class="btn-primary text-lg px-8 py-4 group">
              <span class="flex items-center gap-3">
                Support Our Work
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </span>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary text-lg px-8 py-4">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'
import RobotMascot from '~/components/RobotMascot.vue'
import ResearchCard from '~/components/ResearchCard.vue'
import BlogCard from '~/components/BlogCard.vue'

// Function to get the correct URL for a blog post
function getBlogPostUrl(post: any) {
  // Primary: Use the _path property if it exists and starts with /blog
  if (post._path && post._path.startsWith('/blog')) {
    return post._path
  }
  
  // Secondary: Use slug property if available
  if (post.slug) {
    return `/blog/${post.slug}`
  }
  
  // Fallback: Extract filename from _path
  if (post._path) {
    const filename = post._path.split('/').pop()
    return `/blog/${filename}`
  }
  
  // Last resort: Use the post ID
  return `/blog/${post._id || 'unknown'}`
}

// Fetch featured content
const { data: featuredResearch } = await useAsyncData('featured-research', () =>
  queryCollection('research')
    .order('date', 'DESC')
    .limit(3)
    .all()
    .catch(() => [])
)

const { data: featuredBlog } = await useAsyncData('featured-blog', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(3)
    .all()
    .catch(() => [])
)

// SEO
useHead({
  title: 'TinkerForge AI - Hands-On Research for Safer, Aligned AI',
  meta: [
    { name: 'description', content: 'Building transparent, open, and hands-on research for safe, human-aligned AI systems. Join us in advancing the frontier of AI safety and alignment.' },
    { property: 'og:title', content: 'TinkerForge AI - Hands-On Research for Safer, Aligned AI' },
    { property: 'og:description', content: 'Building transparent, open, and hands-on research for safe, human-aligned AI systems.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/tinkerforge-avatar.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/tinkerforge-avatar.png' }
  ]
})
</script>


<style scoped>
/* Component-specific animations and effects */
.fade-in { animation: fadeIn 0.8s ease-out; }
.slide-up { animation: slideUp 1s ease-out; }
.scale-in { animation: scaleIn 0.6s ease-out; }
</style>

