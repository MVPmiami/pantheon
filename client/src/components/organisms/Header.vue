<script setup lang="ts">
import Button from '../atoms/Button.vue';
</script>

<template>
    <header :class="[$style.header, $style.container]">
        <div :class="$style.logo"></div>
        <Button :class="[$style.btn, $style.loginBtn]" color="grey">Login</Button>
        <Button :class="[$style.btn, $style.createBtn]" color="orange">Create account</Button>
        <Button :class="[$style.btn, $style.playBtn]" color="red">Play</Button>
    </header>
</template>

<style lang="scss" module>
.header {
    height: 18rem;
    display: flex;
    position: relative;

    .logo {
        background-image: url('../../assets/images/logo.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: 28rem;
        height: 10rem;
        position: absolute;
        left: 38px;
    }

    .btn {
        position: absolute;
        bottom: 0rem;
    }

    .createBtn {
        left: 15.5rem
    }

    .playBtn {
        right: 0rem;
        padding: 1.5rem 6rem;
    }
}

@media(max-width:1380px) {
    .header {
        .logo {
            left: 12px;
        }
    }
}

@media(max-width:980px) {
    .header {
        .createBtn {
            left: 12.5rem
        }

        .logo {
            left: 0px;
        }
    }
}

@media(max-width:680px) {
    .header {
        .btn {
            position: absolute;
            bottom: 0rem;
        }

        .createBtn {
            left: 0rem;
            bottom: 4.5rem;
        }

        .playBtn {
            right: 0rem;
            padding: 1.5rem 6rem;
        }

        .logo {
            position: relative;
            margin: 0 auto;
            background-size: 100%;
            width: 20rem;
            height: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
            left: auto;
        }
    }
}
</style>