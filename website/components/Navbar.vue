<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between w-100" style="height: 4rem;">
        <!-- Logo -->
        <NuxtLink to="/" class="d-flex align-items-center text-white text-decoration-none">
          <div class="position-relative me-2">
            <img src="/tinkerforge-avatar.png" alt="TinkerForge AI" class="rounded-circle border border-primary" style="width: 2rem; height: 2rem;" />
          </div>
          <span class="fs-4 fw-bold">TINKERFORGE</span>
        </NuxtLink>
        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex align-items-center ms-auto gap-2">
          <NuxtLink to="/research" class="nav-link">Research</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/hardware" class="nav-link">Hardware</NuxtLink>
          <NuxtLink to="/philosophy" class="nav-link">Philosophy</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/human-safe-policy" class="nav-link">Safety</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          <NuxtLink to="/support-us" class="btn btn-primary btn-sm ms-3">Support Us</NuxtLink>
          <DarkModeToggle class="ms-2" />
        </div>
        <!-- Mobile menu button -->
        <div class="d-md-none ms-2">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="btn btn-outline-light btn-sm" :aria-expanded="mobileMenuOpen" aria-label="Toggle navigation menu">
            <span v-if="!mobileMenuOpen"><i class="bi bi-list"></i></span>
            <span v-else><i class="bi bi-x-lg"></i></span>
          </button>
        </div>
      </div>
      <!-- Mobile Navigation -->
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="d-md-none bg-dark border-top border-secondary mt-3 p-3 rounded shadow">
          <div class="d-flex flex-column gap-2">
            <NuxtLink to="/research" class="nav-link" @click="mobileMenuOpen = false">Research</NuxtLink>
            <NuxtLink to="/blog" class="nav-link" @click="mobileMenuOpen = false">Blog</NuxtLink>
            <NuxtLink to="/hardware" class="nav-link" @click="mobileMenuOpen = false">Hardware</NuxtLink>
            <NuxtLink to="/philosophy" class="nav-link" @click="mobileMenuOpen = false">Philosophy</NuxtLink>
            <NuxtLink to="/about" class="nav-link" @click="mobileMenuOpen = false">About</NuxtLink>
            <NuxtLink to="/human-safe-policy" class="nav-link" @click="mobileMenuOpen = false">Safety Policy</NuxtLink>
            <NuxtLink to="/contact" class="nav-link" @click="mobileMenuOpen = false">Contact</NuxtLink>
            <NuxtLink to="/support-us" class="btn btn-primary btn-sm mt-2 align-self-start" @click="mobileMenuOpen = false">Support Us</NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

// Handle scroll for navbar styling
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Close mobile menu when clicking outside
  const handleClickOutside = (event: Event) => {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(event.target as Node)) {
      mobileMenuOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClickOutside)
  })
})

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.navbar-scrolled {
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  background: #18181b !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
