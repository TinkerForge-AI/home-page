<template>
  <article class="card h-100 text-light">
    <!-- Type Badge -->
    <div class="mb-2">
      <span v-if="type" 
        class="badge"
        :class="{
          'badge-primary': type === 'research' || type === 'Research',
          'badge-secondary': type === 'blog' || type === 'Blog',
          'badge-success': type === 'philosophy' || type === 'Philosophy',
          'badge-warning': type === 'experiment' || type === 'Experiment'
        }"
      >
        {{ typeLabel }}
      </span>
    </div>

    <!-- Content -->
    <div class="mb-3">
      <h3 class="h5 mb-2">
        <NuxtLink :to="to" class="stretched-link text-decoration-none text-light">{{ title }}</NuxtLink>
      </h3>
      <p class="text-muted mb-0" style="min-height:3em;">{{ summary }}</p>
    </div>

    <!-- Meta Information -->
    <div class="d-flex justify-content-between align-items-center small text-secondary mb-3">
      <div class="d-flex align-items-center gap-2">
        <time v-if="date" :datetime="date" class="d-flex align-items-center gap-1">
          <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          {{ formatDate(date) }}
        </time>
        <span v-if="author && date" class="mx-2">&bull;</span>
        <span v-if="author" class="d-flex align-items-center gap-1">
          <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          {{ author }}
        </span>
      </div>
      <div class="d-flex align-items-center gap-1">
        <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>5 min read</span>
      </div>
    </div>

    <!-- Read More Link -->
    <NuxtLink 
      :to="to" 
      class="btn btn-link p-0 text-info d-flex align-items-center gap-1"
    >
      Read Article 
      <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
      </svg>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  summary?: string
  to: string
  date?: string
  type?: string
  author?: string
}

const props = withDefaults(defineProps<Props>(), {
  summary: '',
  date: '',
  type: 'blog',
  author: ''
})

const typeLabel = computed(() => {
  const typeMap: Record<string, string> = {
    'research': 'Research',
    'Research': 'Research',
    'blog': 'Blog',
    'Blog': 'Blog',
    'philosophy': 'Philosophy',
    'Philosophy': 'Philosophy',
    'experiment': 'Experiment',
    'Experiment': 'Experiment'
  }
  return typeMap[props.type] || props.type || 'Article'
})

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  } catch (error) {
    return dateString
  }
}
</script>

<style scoped>
.icon-sm {
  font-size: 1rem;
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
