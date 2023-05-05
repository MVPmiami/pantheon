<script setup lang="ts">
import Button from '../atoms/Button.vue';
</script>

<template>
    <header :class="[$style.header, $style.container]">
        <div :class="$style.logo"></div>
        <Button :class="[$style.btn, $style.login]">login</Button>
        <Button :class="[$style.btn, $style.createBtn]">create account</Button>
        <Button :class="[$style.btn, $style.playBtn]">play</Button>
    </header>
</template>

<style lang="scss" module>
.header {
    height: 22rem;
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
        bottom: 2rem;
        left: 2rem;
    }

    .createBtn {
        left: 18.5rem;
        width: 20rem;
    }

    .playBtn {
        right: -109rem;
        padding: 1.5rem 6rem;
    }
}

@media(max-width:1380px) {
    .header {
        .logo {
            left: 12px;
        }

        .playBtn {
            right: -70rem;
        }
    }
}

@media(max-width:980px) {
    .header {
        .btn {
            left: 1rem;
        }

        .createBtn {
            left: 18.5rem
        }

        .logo {
            left: 0px;
        }

        .playBtn {
            right: -40rem;
        }
    }
}

@media(max-width:680px) {
    .header {
        height: 26rem;

        .btn {
            position: absolute;
            bottom: 0rem;
            font-size: 1.4rem;
            width: 12rem;

            & span {
                font-size: 1.2rem;
            }
        }

        .login {
            left: 1rem;
            bottom: 10rem;
        }

        .createBtn {
            left: 1rem;
            bottom: 3.5rem;

            & span {
                text-align: center;
            }
        }

        .playBtn {
            right: -16rem;
            bottom: 10rem;
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