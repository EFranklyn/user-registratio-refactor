<script lang="ts" setup>
  import { useRouter } from "vue-router";
  const routerManager = useRouter();
  const close = ():void => {
    routerManager.back()      
  };
</script>

<template>
  <div>
    <h1>TESTE</h1>
    <button @click="close">
      Back
    </button>
  </div>
</template>

