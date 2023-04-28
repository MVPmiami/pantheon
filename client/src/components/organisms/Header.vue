<script setup lang="ts">
import Button from '../atoms/Button.vue';
</script>

<template>
    <header :class="[$style.header, $style.container]">
        <Button :class="[$style.btn,$style.loginBtn]" color="grey">Login</Button>
        <Button :class="[$style.btn,$style.createBtn]" color="orange">Create account</Button>
        <Button :class="[$style.btn,$style.playBtn]" color="red">Play</Button>
    </header>
</template>

<style lang="scss" module>
    .header{
        height: 18rem;
        display: flex;
        position: relative;
        .btn{
            position: absolute;
            bottom: 0rem;
        }
        .createBtn{
            left: 15.5rem
        }
        .playBtn{
            right: 0rem;
            padding: 1.5rem 6rem;
        }
    }
</style>