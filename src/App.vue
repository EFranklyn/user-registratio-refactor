<script setup>
  import { provide } from 'vue';
  
  const theme = 'dark';
  provide('theme', theme);
</script>

<template>
  <router-view />
</template>


