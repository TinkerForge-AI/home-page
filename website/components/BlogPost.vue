<template>
  <MainLayout>
    <section class="section pt-24 text-light">
      <div class="container">
        <article v-if="data" class="prose prose-lg max-w-3xl mx-auto">
          <h1>{{ data.title }}</h1>
          <p class="text-neutral-400 mb-4">{{ data.description }}</p>
          <ContentRenderer :value="data" />
        </article>
        <div v-else class="text-center py-24">
          <h2 class="text-2xl font-bold mb-4">Not Found</h2>
          <p class="text-neutral-400">This article does not exist or has been moved.</p>
          <NuxtLink :to="effectiveBackLink" class="btn-primary px-6 py-2 rounded">Back</NuxtLink>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'

/**
 * BlogPost Component
 * 
 * A reusable component for displaying a full blog or research post from markdown content.
 * 
 * @param data - The content data object with title, description, and content
 * @param backLink - The path to navigate back to (e.g., /blog, /research)
 */
const props = defineProps<{ 
  data: any,  // Content data from queryCollection
  backLink?: string // Path to return to (default: '/')
}>()

// Set a default back link if not provided
const effectiveBackLink = computed(() => props.backLink || '/')
</script>
