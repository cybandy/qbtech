<script setup lang='ts'>

</script>

<template>
    <div class="relative w-screen h-screen">
        <UContainer class="flex items-center justify-end py-5">
            <UtilitiesDarkMode class="" />
        </UContainer>
        <UContainer class="relative w-full h-full grid place-content-center">

            <h1
                class="font-bold text-5xl sm:text-6xl lg:text-8xl uppercase bg-gradient-to-r from-indigo-500 dark:from-indigo-400 to-cyan-500 dark:to-cyan-400 bg-clip-text text-transparent font-serif">
                Coming Soon</h1>

        </UContainer>
        <slot />
    </div>

</template>

<style scoped>
/* h1 {
    font-family: Lato, sans-serif;
} */
</style>