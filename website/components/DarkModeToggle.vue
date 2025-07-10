<template>
  <button @click="toggleDark" :aria-pressed="isDark" class="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style="width:2.5rem;height:2.5rem;" aria-label="Toggle dark mode">
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleDark() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
