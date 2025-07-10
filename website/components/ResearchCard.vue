<template>
  <div class="card mb-4">
    <div class="card-body">
      <h3 class="card-title h5">{{ title }}</h3>
      <p class="card-text">{{ summary }}</p>
      <NuxtLink v-if="to" :to="to" class="btn btn-link p-0">Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; summary: string; to?: string }>()
</script>
