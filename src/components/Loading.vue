<template>
    <div class="circle-loading">  
    </div>
</template>  
  
<style scoped>
    .circle-loading {
    width: 100px;
    height: 100px;
    border-radius: 70%;
    border: 5px solid transparent;
    border-top-color: #007bff;
    animation: spin 1s linear infinite;
    }
    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>