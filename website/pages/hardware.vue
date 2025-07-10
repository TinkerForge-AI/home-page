<template>
  <MainLayout>
    <section class="section pt-24 text-light">
      <div class="container">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <div class="relative mb-8">
            <img 
              src="/tinkerforge-avatar.png" 
              alt="TinkerForge AI Robot" 
              class="w-20 h-20 rounded-full ring-2 ring-cyan-500/30 glow-cyan mx-auto"
            >
            <div class="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse"></div>
          </div>
          
          <h1 class="heading-primary mb-6">
            Lab Hardware
          </h1>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            The computational infrastructure powering our AI safety research and experiments.
          </p>
        </div>

        <!-- Hardware Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="lg:col-span-2">
            <div class="card p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <h2 class="text-2xl font-bold text-white">Infrastructure Overview</h2>
              </div>
              
              <ContentDoc path="/hardware-setup-summary" class="prose prose-invert prose-lg max-w-none">
                <template #not-found>
                  <div class="space-y-6">
                    <p class="text-neutral-300 leading-relaxed">
                      Our research infrastructure is designed to support cutting-edge AI safety experiments 
                      while maintaining efficiency and scalability. We combine high-performance computing 
                      resources with specialized hardware for different research domains.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="bg-neutral-800/50 p-4 rounded-lg">
                        <h3 class="text-white font-semibold mb-2">Training Infrastructure</h3>
                        <p class="text-neutral-400 text-sm">
                          High-memory GPU clusters for training and fine-tuning language models with safety constraints.
                        </p>
                      </div>
                      
                      <div class="bg-neutral-800/50 p-4 rounded-lg">
                        <h3 class="text-white font-semibold mb-2">Evaluation Systems</h3>
                        <p class="text-neutral-400 text-sm">
                          Specialized environments for running alignment benchmarks and safety evaluations.
                        </p>
                      </div>
                    </div>
                  </div>
                </template>
              </ContentDoc>
            </div>
          </div>
          
          <!-- Quick Stats -->
          <div class="space-y-6">
            <div class="card p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-white font-semibold">Computing Power</h3>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-neutral-400 text-sm">GPU Memory</span>
                  <span class="text-white font-medium text-sm">192GB+</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-400 text-sm">CPU Cores</span>
                  <span class="text-white font-medium text-sm">64+</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-400 text-sm">System RAM</span>
                  <span class="text-white font-medium text-sm">512GB+</span>
                </div>
              </div>
            </div>
            
            <div class="card p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="text-white font-semibold">Safety Features</h3>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-neutral-400 text-sm">Isolated environments</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-neutral-400 text-sm">Redundant backups</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-neutral-400 text-sm">Monitoring systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hardware Categories -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <div class="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            Hardware Categories
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <!-- GPU Compute -->
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">GPU Clusters</h3>
              <p class="text-neutral-400 text-sm mb-3">High-performance graphics processing for model training and inference</p>
              <div class="text-red-400 font-bold">4x RTX 4090</div>
            </div>

            <!-- CPU Servers -->
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">CPU Servers</h3>
              <p class="text-neutral-400 text-sm mb-3">Multi-core processors for data processing and coordination tasks</p>
              <div class="text-blue-400 font-bold">2x Xeon Gold</div>
            </div>

            <!-- Storage -->
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">Storage Systems</h3>
              <p class="text-neutral-400 text-sm mb-3">High-speed storage for datasets, models, and experiment results</p>
              <div class="text-green-400 font-bold">20TB NVMe</div>
            </div>

            <!-- Networking -->
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                </svg>
              </div>
              <h3 class="text-white font-semibold mb-2">Networking</h3>
              <p class="text-neutral-400 text-sm mb-3">High-bandwidth connections for distributed computing and data transfer</p>
              <div class="text-purple-400 font-bold">10Gb Ethernet</div>
            </div>
          </div>
        </div>

        <!-- Research Applications -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            Research Applications
          </h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="card p-6">
              <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                Model Training & Fine-tuning
              </h3>
              <p class="text-neutral-400 mb-4">
                Training language models with safety constraints, reward modeling, and constitutional AI approaches.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span class="text-neutral-300">Safety-constrained training</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span class="text-neutral-300">Reward model optimization</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span class="text-neutral-300">Constitutional AI techniques</span>
                </div>
              </div>
            </div>

            <div class="card p-6">
              <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Safety Evaluation
              </h3>
              <p class="text-neutral-400 mb-4">
                Running comprehensive safety benchmarks and alignment evaluations on trained models.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-neutral-300">Alignment benchmarks</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-neutral-300">Safety stress testing</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-neutral-300">Interpretability analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Future Expansion -->
        <div class="card-featured p-8 text-center">
          <h2 class="text-2xl font-bold text-white mb-4">Future Expansion Plans</h2>
          <p class="text-neutral-300 mb-6 max-w-2xl mx-auto">
            As our research scales, we plan to expand our infrastructure to support larger models 
            and more complex safety experiments.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-neutral-800/50 p-4 rounded-lg">
              <div class="text-cyan-400 font-bold text-xl mb-1">H100 GPUs</div>
              <div class="text-neutral-400 text-sm">Next-generation training acceleration</div>
            </div>
            <div class="bg-neutral-800/50 p-4 rounded-lg">
              <div class="text-blue-400 font-bold text-xl mb-1">Distributed Computing</div>
              <div class="text-neutral-400 text-sm">Multi-node training clusters</div>
            </div>
            <div class="bg-neutral-800/50 p-4 rounded-lg">
              <div class="text-purple-400 font-bold text-xl mb-1">Specialized Hardware</div>
              <div class="text-neutral-400 text-sm">Custom AI safety evaluation systems</div>
            </div>
          </div>
          
          <NuxtLink to="/support-us" class="btn-primary">
            Support Our Infrastructure
          </NuxtLink>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'

// SEO using useSeoMeta
useSeoMeta({
  title: 'Lab Hardware - TinkerForge AI',
  description: 'Explore the computational infrastructure powering TinkerForge AI\'s research: GPU clusters, servers, and specialized hardware for AI safety experiments.',
  ogTitle: 'TinkerForge AI Lab Hardware',
  ogDescription: 'The computational infrastructure powering our AI safety research and experiments',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})
</script>

<style scoped>
/* Cyan glow effect for hardware theme */
.glow-cyan {
  filter: drop-shadow(0 0 6px rgba(6, 182, 212, 0.3));
}
</style>
