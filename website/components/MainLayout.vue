<template>
  <div class="d-flex flex-column min-vh-100 bg-dark position-relative">
    <!-- Background Effects (custom CSS, not Tailwind) -->
    <div class="position-fixed top-0 start-0 w-100 h-100 bg-particles pointer-events-none"></div>
    <div class="position-fixed top-0 start-0 w-100 h-100 bg-animated opacity-30 pointer-events-none"></div>

    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow-1 position-relative" style="z-index: 10;">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

// Ensure dark mode is enabled by default
onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
