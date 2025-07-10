<template>
  <MainLayout>
    <section class="section pt-24 text-light">
      <div class="container">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <div class="position-relative mb-4">
            <RobotMascot class="mx-auto" />
          </div>
          <h1 class="heading-primary mb-4">About TinkerForge AI</h1>
          <p class="fs-4 text-secondary max-w-3xl mx-auto mb-0">
            Building the future of AI safety through rigorous research, responsible development, 
            and transparent collaboration with the global AI community.
          </p>
        </div>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto">
          <div class="card p-4 p-lg-5">
            <ContentDoc path="/charter-business-plan" class="prose prose-lg max-w-none text-light">
              <template #not-found>
                <div class="text-center py-5">
                  <div class="bg-secondary rounded-xl d-flex align-items-center justify-content-center mx-auto mb-3" style="width:3rem;height:3rem;">
                    <svg class="icon-sm text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                  </div>
                  <h3 class="fw-semibold mb-2">Content Not Found</h3>
                  <p class="text-secondary">The charter business plan content is not available.</p>
                </div>
              </template>
            </ContentDoc>
          </div>
        </div>

        <!-- Values Section -->
        <div class="mt-5">
          <h2 class="fs-2 fw-bold text-light mb-4 text-center d-flex align-items-center justify-content-center gap-3">
            <span class="bg-info rounded-pill d-inline-block" style="width:8px;height:32px;"></span>
            Our Core Values
          </h2>
          <div class="row g-4">
            <div class="col-12 col-md-4">
              <div class="card p-4 text-center">
                <div class="bg-info bg-opacity-25 rounded-xl d-flex align-items-center justify-content-center mx-auto mb-3" style="width:3rem;height:3rem;">
                  <svg class="icon-sm text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="fw-semibold mb-2">Safety First</h3>
                <p class="text-secondary small">Prioritizing AI safety and alignment in all our research and development efforts.</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card p-4 text-center">
                <div class="bg-success bg-opacity-25 rounded-xl d-flex align-items-center justify-content-center mx-auto mb-3" style="width:3rem;height:3rem;">
                  <svg class="icon-sm text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 class="fw-semibold mb-2">Transparency</h3>
                <p class="text-secondary small">Open research, clear methodologies, and honest communication about AI risks and benefits.</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card p-4 text-center">
                <div class="bg-primary bg-opacity-25 rounded-xl d-flex align-items-center justify-content-center mx-auto mb-3" style="width:3rem;height:3rem;">
                  <svg class="icon-sm text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 class="fw-semibold mb-2">Collaboration</h3>
                <p class="text-secondary small">Working with the global AI community to solve alignment challenges together.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-5 text-center">
          <div class="card-featured p-4">
            <h3 class="fs-3 fw-bold text-light mb-3">Join Our Mission</h3>
            <p class="text-secondary mb-4 max-w-2xl mx-auto">
              Help us build AI systems that are aligned with human values and beneficial for all of humanity.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <NuxtLink to="/research" class="btn btn-primary">
                View Our Research
              </NuxtLink>
              <NuxtLink to="/contact" class="btn btn-secondary">
                Get in Touch
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'
import RobotMascot from '~/components/RobotMascot.vue'

// SEO using useSeoMeta
useSeoMeta({
  title: 'About Us - TinkerForge AI',
  description: 'Learn about TinkerForge AI\'s mission to advance AI safety through rigorous research, responsible development, and transparent collaboration.',
  ogTitle: 'About TinkerForge AI',
  ogDescription: 'Building the future of AI safety through rigorous research and responsible development',
  ogImage: '/tinkerforge-avatar.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: '/tinkerforge-avatar.png'
})
</script>
