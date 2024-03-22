<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const close = (): void => {
  router.back();
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
