<template>
  <div>
    <h1>TESTE</h1>
    <button @click="close">
      Back
    </button>
  </div>
</template>
<script setup>
  import { useRouter } from "vue-router";
  const routerManager = useRouter();
  const close = () => {
    routerManager.back()      
  };
</script>

