<template>
  <MainLayout>
    <section class="section min-h-screen flex flex-col justify-center items-center text-center bg-neutral-900 text-white">
      <img src="/tinkerforge-avatar.png" alt="TinkerForge AI Mascot" class="w-32 h-32 mb-6 rounded-full ring-2 ring-blue-500/30 glow-blue" />
      <h1 class="text-5xl font-bold mb-4">{{ error.statusCode }}</h1>
      <h2 class="text-2xl font-semibold mb-2">
        {{ error.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
      </h2>
      <p class="text-neutral-400 mb-6">
        {{ error.statusCode === 404
          ? 'Sorry, the page you are looking for does not exist or has been moved.'
          : error.message || 'Something went wrong.' }}
      </p>
      <NuxtLink to="/" class="btn-primary px-6 py-2 rounded">Return Home</NuxtLink>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout.vue'
defineProps<{ error: { statusCode: number, message?: string } }>()
</script>

<style scoped>
.section {
  background: radial-gradient(ellipse at top left, #1e293b 60%, #0f172a 100%);
}
.btn-primary {
  background: #2563eb;
  color: #fff;
  font-weight: 500;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: #1d4ed8;
}
</style>
