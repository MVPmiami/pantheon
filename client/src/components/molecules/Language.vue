<script setup lang="ts">
import { useStore } from '../../../node_modules/vuex'

const store = useStore()
const changeLanguage = () => store.dispatch('changeLanguageStatus')
</script>

<template>
    <div :class="$style.toggleButtonCover" @click="changeLanguage">
        <div :class="[$style.button, $style.r]" :id="$style.button1">
            <input type="checkbox" :class="$style.checkbox" />
            <div :class="$style.knobs"></div>
            <div :class="$style.layer"></div>
        </div>
    </div>
</template>

<style lang="scss" module>
.toggleButtonCover {
    display: flex;
    position: absolute;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    top: 2rem;
    right: 4.5rem;
}

.button-cover,
.knobs,
.layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.button {
    position: relative;
    top: 50%;
    width: 74px;
    height: 36px;
    margin: -20px auto 0 auto;
    overflow: hidden;
}

.button.r,
.button.r .layer {
    border-radius: 100px;
}

.button.b2 {
    border-radius: 2px;
}

.checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
}

.knobs {
    z-index: 2;
}

.layer {
    width: 100%;
    background-color: $grey;
    transition: 0.3s ease all;
    z-index: 1;
}

/* Button 1 */
#button1 .knobs:before {
    content: "EN";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    font-family: $font-family;
    color: $light;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: $orange;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

#button1 .checkbox:checked+.knobs:before {
    content: "RU";
    left: 42px;
    background-color: $red;
    font-family: $font-family;
}

#button1 .checkbox:checked~.layer {
    background-color: $dark-grey;
}

#button1 .knobs,
#button1 .knobs:before,
#button1 .layer {
    transition: 0.3s ease all;
}

@media(max-width:680px) {
    .toggleButtonCover {
        top: 18rem;
        right: 1.5rem;
    }
}
</style>