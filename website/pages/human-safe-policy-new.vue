<template>
  <MainLayout>
    <section class="section pt-24">
      <div class="container">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <div class="relative mb-8">
            <img 
              src="/tinkerforge-avatar.png" 
              alt="TinkerForge AI Robot" 
              class="w-20 h-20 rounded-full ring-2 ring-emerald-500/30 glow-emerald mx-auto"
            >
            <div class="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse"></div>
          </div>
          
          <div class="badge badge-secondary mb-4">Policy Document</div>
          <h1 class="heading-primary mb-6">
            Human Safe Data Policy
          </h1>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive framework for ensuring AI systems and data are safe, ethical, 
            and aligned with human values.
          </p>
          <p class="text-sm text-neutral-500 mt-4">Last updated: July 2025</p>
        </div>

        <!-- Policy Content -->
        <div class="max-w-4xl mx-auto">
          <div class="card p-8 lg:p-12">
            <div class="prose prose-lg prose-invert max-w-none">
              <!-- Overview Section -->
              <div class="mb-12">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
                  <h2 class="text-2xl font-bold text-white m-0">Overview</h2>
                </div>
                <p class="text-neutral-300 leading-relaxed">
                  At TinkerForge, our mission is to build AI and machine learning systems that <strong class="text-emerald-400">"do no harm to humans"</strong> and empower everyone to achieve their fullest potential—intellectually, physically, and emotionally—without infringing on the rights or well-being of others. This policy sets forth our working definition of "Human Safe" data and outlines the principles, guidelines, and processes we use to ensure our models and datasets align with these values.
                </p>
              </div>

              <!-- What Does Human Safe Mean -->
              <div class="mb-12">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  <h2 class="text-2xl font-bold text-white m-0">What Does "Human Safe" Mean?</h2>
                </div>
                <p class="text-neutral-300 mb-4">A "Human Safe" dataset or model is one that:</p>
                <div class="space-y-4">
                  <div class="flex gap-3">
                    <div class="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-neutral-300 m-0"><strong class="text-white">Does not promote, encourage, or facilitate harm</strong> to any person, group, or society.</p>
                  </div>
                  <div class="flex gap-3">
                    <div class="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-neutral-300 m-0"><strong class="text-white">Respects human dignity, autonomy, and freedom</strong>, ensuring that no individual is subjected to manipulation, discrimination, or undue restriction of choice.</p>
                  </div>
                  <div class="flex gap-3">
                    <div class="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-neutral-300 m-0"><strong class="text-white">Supports the right of every individual to pursue their goals</strong>, provided those goals do not infringe on the safety or rights of others.</p>
                  </div>
                  <div class="flex gap-3">
                    <div class="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-neutral-300 m-0"><strong class="text-white">Upholds privacy and confidentiality</strong>, never leaking or exposing sensitive or personally identifiable information.</p>
                  </div>
                  <div class="flex gap-3">
                    <div class="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-neutral-300 m-0"><strong class="text-white">Is robust to misuse</strong>—making it difficult for the model to be repurposed for harmful outcomes.</p>
                  </div>
                </div>
              </div>

              <!-- Contact -->
              <div class="border-t border-neutral-800 pt-8">
                <p class="text-neutral-400 text-sm mb-4">
                  For questions or suggestions about this policy, please contact the TinkerForge AI Ethics Team.
                </p>
                <NuxtLink to="/contact" class="btn-secondary text-sm">
                  Contact Ethics Team
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'

// SEO using useSeoMeta
useSeoMeta({
  title: 'Human Safe Data Policy - TinkerForge AI',
  description: 'Our comprehensive policy for ensuring AI systems and data are safe, ethical, and aligned with human values. Learn about our framework for responsible AI development.',
  ogTitle: 'TinkerForge AI Human Safe Data Policy',
  ogDescription: 'Comprehensive policy for ensuring AI systems and data are safe, ethical, and aligned with human values',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})
</script>

<style scoped>
/* Emerald glow effect for policy theme */
.glow-emerald {
  filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.3));
}

/* Custom prose styling */
.prose {
  color: theme('colors.neutral.300');
}

.prose strong {
  color: theme('colors.white');
}

.prose h1, .prose h2, .prose h3 {
  color: theme('colors.white');
}

.prose a {
  color: theme('colors.blue.400');
  text-decoration: none;
}

.prose a:hover {
  color: theme('colors.blue.300');
}
</style>
