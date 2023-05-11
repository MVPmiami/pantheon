<script setup lang="ts">
import Header from './../organisms/Header.vue'
import PreviewContent from './../atoms/PreviewContent.vue'
</script>

<template>
    <div :class="$style.mainPage">
        <Header />
        <PreviewContent />
    </div>
</template>

<style lang="scss" module>
.mainPage {
    width: 100vw;
    height: 100vh;
}
</style>