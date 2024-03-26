<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const onRedirect = (name: string): void => {
  router.push({ name });
};
</script>

<template>
  <button class="button-menu" @click="() => onRedirect('Form')"> Register User </button>
</template>

<style lang="scss" scoped>
.button-menu {
  color: white;
  padding: 10px 20px;
  border: none;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: red;
}
</style>