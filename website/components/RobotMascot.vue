<template>
  <div class="d-flex flex-column align-items-center">
    <img :src="src" alt="Tinkerer robot mascot" class="shadow rounded mb-2" style="width: 6rem; height: 6rem; transition: transform 0.3s;" @mouseover="animate = true" @mouseleave="animate = false" :style="animate ? 'transform: scale(1.1) rotate(6deg);' : ''" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const src = '/tinkerforge-avatar.png'
const animate = ref(false)
</script>
