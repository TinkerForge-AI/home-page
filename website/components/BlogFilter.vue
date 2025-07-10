<template>
  <div class="mb-3">
    <label for="typeFilter" class="form-label">Filter by type:</label>
    <select id="typeFilter" class="form-select w-auto d-inline-block" v-model="selectedType" @change="$emit('update:type', selectedType)">
      <option value="">All</option>
      <option value="blog">Blog</option>
      <option value="research">Research</option>
      <option value="philosophy">Philosophy</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ type?: string }>()
const selectedType = ref(props.type || '')
watch(() => props.type, val => { selectedType.value = val || '' })
</script>
