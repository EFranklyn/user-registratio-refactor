<script lang="ts" setup>
import { useRouter } from "vue-router";
const routerManager = useRouter();

interface ButtonSchema {
  name: string;
  label: String,
  color: String
  to:String
}

const buttons: ButtonSchema[] = [
  {
    name: 'Register User',
    label: 'Register User',
    color:'red',
    to:'Form'
  },
  {
    name: 'About',
    label: 'List Users',
    color:'red',
    to:'About'
  },
];
const onRedirect = (name): void=> {
    routerManager.push({ name });
};
</script>

<template>
    <button  class="button-menu" v-for="(button, index) in buttons" 
        :style="{ backgroundColor: button.color }"
        :key="index"        
        :onClick="() => onRedirect(button.to)"
    >   
    {{ button.label }}
    </button>
</template>

<style lang="scss" scoped>
.button-menu {
    color: white;
    padding: 10px 20px;
    border: none;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
}
</style>