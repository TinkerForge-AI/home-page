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
              class="w-20 h-20 rounded-full ring-2 ring-blue-500/30 glow-blue mx-auto"
            >
            <div class="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
          </div>
          
          <h1 class="heading-primary mb-6">
            Get in Touch
          </h1>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our research? Want to collaborate? 
            We'd love to hear from you.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- Contact Methods -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <!-- Direct Contact -->
            <div class="card p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <h2 class="text-2xl font-bold text-white">Direct Contact</h2>
              </div>
              
              <div class="space-y-6">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-neutral-400 text-sm">Email us at</p>
                    <a href="mailto:hello@tinkerforge.ai" class="text-white font-medium hover:text-blue-400 transition-colors">
                      hello@tinkerforge.ai
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-neutral-400 text-sm">Response time</p>
                    <p class="text-white font-medium">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="card p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <h2 class="text-2xl font-bold text-white">Follow Us</h2>
              </div>
              
              <div class="space-y-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center gap-4 p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors group"
                >
                  <div class="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center group-hover:bg-neutral-600 transition-colors">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-white font-medium">GitHub</p>
                    <p class="text-neutral-400 text-sm">View our open source projects</p>
                  </div>
                </a>

                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center gap-4 p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors group"
                >
                  <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-white font-medium">Twitter</p>
                    <p class="text-neutral-400 text-sm">Latest updates and insights</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center gap-4 p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors group"
                >
                  <div class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-white font-medium">LinkedIn</p>
                    <p class="text-neutral-400 text-sm">Professional network and news</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div class="card-featured p-8 text-center">
            <h2 class="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p class="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest research updates, insights, and announcements from TinkerForge AI.
            </p>
            <NewsletterSignup />
          </div>

          <!-- FAQ Section -->
          <div class="mt-16">
            <h2 class="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Frequently Asked Questions
            </h2>
            
            <div class="space-y-6">
              <div class="card p-6">
                <h3 class="text-white font-semibold mb-2">How can I collaborate with TinkerForge AI?</h3>
                <p class="text-neutral-400">We welcome collaborations with researchers, institutions, and organizations working on AI safety. Email us with details about your project or research interests.</p>
              </div>
              
              <div class="card p-6">
                <h3 class="text-white font-semibold mb-2">Are your research papers open access?</h3>
                <p class="text-neutral-400">Yes, we believe in transparent research. All our publications are freely available and we share our methodologies openly with the community.</p>
              </div>
              
              <div class="card p-6">
                <h3 class="text-white font-semibold mb-2">Do you offer internships or research positions?</h3>
                <p class="text-neutral-400">We occasionally have opportunities for talented researchers. Check our latest announcements or reach out directly to discuss potential positions.</p>
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
import NewsletterSignup from '~/components/NewsletterSignup.vue'

// SEO using useSeoMeta
useSeoMeta({
  title: 'Contact Us - TinkerForge AI',
  description: 'Get in touch with TinkerForge AI for collaborations, questions, or to learn more about our AI safety research.',
  ogTitle: 'Contact TinkerForge AI',
  ogDescription: 'Get in touch with our team for collaborations, questions, or AI safety research inquiries',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})
</script>
