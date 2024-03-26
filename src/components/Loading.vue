<template>
    <div class="circle-loading" />
</template>

<style lang="scss" scoped>
.circle-loading {
    width: 100px;
    height: 100px;
    border-radius: 50%;
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