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
              class="w-20 h-20 rounded-full ring-2 ring-green-500/30 glow-green mx-auto"
            >
            <div class="absolute inset-0 rounded-full bg-green-500/20 animate-pulse"></div>
          </div>
          
          <h1 class="heading-primary mb-6">
            Support Our Mission
          </h1>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Help us advance AI safety research and build a future where artificial intelligence 
            serves humanity's best interests.
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- Impact Statement -->
          <div class="card-featured p-8 mb-12 text-center">
            <h2 class="text-2xl font-bold text-white mb-4">Your Support Makes a Difference</h2>
            <p class="text-neutral-300 mb-6 max-w-3xl mx-auto">
              Every contribution directly funds critical AI safety research, hardware infrastructure, 
              and open science initiatives that benefit the entire AI research community.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 class="text-white font-semibold mb-2">Research</h3>
                <p class="text-neutral-400 text-sm">Fund groundbreaking AI safety and alignment research</p>
              </div>
              
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
                <h3 class="text-white font-semibold mb-2">Hardware</h3>
                <p class="text-neutral-400 text-sm">Support computational infrastructure for experiments</p>
              </div>
              
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-3">
                  <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 class="text-white font-semibold mb-2">Outreach</h3>
                <p class="text-neutral-400 text-sm">Enable open science and community education</p>
              </div>
            </div>
          </div>

          <!-- Support Options -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <div class="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              Ways to Support
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Patreon -->
              <div class="card p-6 hover:border-orange-500/30 transition-colors group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 0.5h4.219v23h-4.219v-23zm8.109 0c6.583 0 11.891 5.348 11.891 11.954 0 6.606-5.308 11.955-11.891 11.955-6.583 0-11.891-5.349-11.891-11.955 0-6.606 5.308-11.954 11.891-11.954z"/>
                    </svg>
                  </div>
                  <h3 class="text-white font-semibold">Patreon</h3>
                </div>
                <p class="text-neutral-400 mb-4 text-sm">
                  Monthly support for ongoing research with exclusive updates and behind-the-scenes content.
                </p>
                <a 
                  href="https://patreon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-primary w-full text-center group-hover:bg-orange-500/20 transition-colors"
                >
                  Support on Patreon
                </a>
              </div>

              <!-- GitHub Sponsors -->
              <div class="card p-6 hover:border-neutral-500/30 transition-colors group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 class="text-white font-semibold">GitHub Sponsors</h3>
                </div>
                <p class="text-neutral-400 mb-4 text-sm">
                  Support our open source work and get recognition in our project repositories.
                </p>
                <a 
                  href="https://github.com/sponsors/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-primary w-full text-center group-hover:bg-neutral-500/20 transition-colors"
                >
                  Sponsor on GitHub
                </a>
              </div>

              <!-- OpenCollective -->
              <div class="card p-6 hover:border-blue-500/30 transition-colors group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h3 class="text-white font-semibold">OpenCollective</h3>
                </div>
                <p class="text-neutral-400 mb-4 text-sm">
                  Transparent funding with full visibility into how your contributions are used.
                </p>
                <a 
                  href="https://opencollective.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-primary w-full text-center group-hover:bg-blue-500/20 transition-colors"
                >
                  Contribute on OpenCollective
                </a>
              </div>
            </div>
          </div>

          <!-- Funding Goals -->
          <div class="card p-8 mb-12">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <h2 class="text-2xl font-bold text-white">Current Funding Goals</h2>
            </div>
            
            <div class="space-y-6">
              <div class="p-6 bg-neutral-800/50 rounded-lg">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-white font-semibold">Basic Research Operations</h3>
                  <span class="text-green-400 font-medium">$2,000/month</span>
                </div>
                <div class="w-full bg-neutral-700 rounded-full h-2 mb-3">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 60%"></div>
                </div>
                <p class="text-neutral-400 text-sm">Fund essential research activities, publications, and basic infrastructure.</p>
              </div>
              
              <div class="p-6 bg-neutral-800/50 rounded-lg">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-white font-semibold">Expanded Hardware Resources</h3>
                  <span class="text-blue-400 font-medium">$5,000/month</span>
                </div>
                <div class="w-full bg-neutral-700 rounded-full h-2 mb-3">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 25%"></div>
                </div>
                <p class="text-neutral-400 text-sm">Enable larger-scale experiments and more sophisticated research projects.</p>
              </div>
              
              <div class="p-6 bg-neutral-800/50 rounded-lg">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-white font-semibold">Full Research Team</h3>
                  <span class="text-purple-400 font-medium">$15,000/month</span>
                </div>
                <div class="w-full bg-neutral-700 rounded-full h-2 mb-3">
                  <div class="bg-purple-500 h-2 rounded-full" style="width: 10%"></div>
                </div>
                <p class="text-neutral-400 text-sm">Support a dedicated team of researchers working full-time on AI safety.</p>
              </div>
            </div>
          </div>

          <!-- Transparency & Charter -->
          <div class="card p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <h2 class="text-2xl font-bold text-white">Our Commitment to Transparency</h2>
            </div>
            
            <ContentDoc path="/charter-business-plan" class="prose prose-invert prose-lg max-w-none">
              <template #not-found>
                <div class="text-center py-8">
                  <p class="text-neutral-400">
                    We believe in complete transparency about how funding is used. All donations go directly toward:
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div class="text-center">
                      <div class="text-blue-400 font-bold text-2xl">70%</div>
                      <div class="text-neutral-400 text-sm">Research & Development</div>
                    </div>
                    <div class="text-center">
                      <div class="text-green-400 font-bold text-2xl">20%</div>
                      <div class="text-neutral-400 text-sm">Hardware & Infrastructure</div>
                    </div>
                    <div class="text-center">
                      <div class="text-purple-400 font-bold text-2xl">10%</div>
                      <div class="text-neutral-400 text-sm">Outreach & Education</div>
                    </div>
                  </div>
                </div>
              </template>
            </ContentDoc>
          </div>

          <!-- Other Ways to Help -->
          <div class="mt-16 text-center">
            <h2 class="text-xl font-bold text-white mb-6">Other Ways to Help</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <NuxtLink to="/research" class="card-secondary p-4 text-center hover:bg-blue-500/10 transition-colors">
                <svg class="w-6 h-6 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                </svg>
                <div class="text-white font-medium text-sm">Share Our Research</div>
              </NuxtLink>
              
              <NuxtLink to="/contact" class="card-secondary p-4 text-center hover:bg-green-500/10 transition-colors">
                <svg class="w-6 h-6 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z"/>
                </svg>
                <div class="text-white font-medium text-sm">Collaborate</div>
              </NuxtLink>
              
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="card-secondary p-4 text-center hover:bg-purple-500/10 transition-colors">
                <svg class="w-6 h-6 text-purple-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div class="text-white font-medium text-sm">Contribute Code</div>
              </a>
              
              <div class="card-secondary p-4 text-center">
                <svg class="w-6 h-6 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
                <div class="text-white font-medium text-sm">Leave a Review</div>
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
  title: 'Support Us - TinkerForge AI',
  description: 'Support TinkerForge AI\'s mission to advance AI safety research through Patreon, GitHub Sponsors, or OpenCollective. Help fund critical research, hardware, and outreach.',
  ogTitle: 'Support TinkerForge AI',
  ogDescription: 'Help us advance AI safety research and build a future where AI serves humanity',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})
</script>

<style scoped>
/* Green glow effect for support theme */
.glow-green {
  filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.3));
}
</style>
