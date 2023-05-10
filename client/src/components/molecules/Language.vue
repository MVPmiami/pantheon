<script setup lang="ts">
import { useStore } from '../../../node_modules/vuex'
import { ref, Ref } from 'vue'
const store = useStore()
const checkbox: Ref<null | any | HTMLElement> = ref(null)

const changeLanguage = () => {
    checkbox.value.disabled = true
    store.dispatch('changeLanguageStatus')
    setTimeout(() => {
        checkbox.value.disabled = false
    }, 500)
}
</script>

<template>
    <div :class="$style.toggleButtonCover" @click="changeLanguage">
        <div :class="[$style.button, $style.r]" :id="$style.button1">
            <input type="checkbox" :class="$style.checkbox" ref="checkbox" />
            <div :class="$style.knobs"></div>
            <div :class="$style.layer"></div>
        </div>
    </div>
</template>

<style lang="scss" module>
.toggleButtonCover {
    display: flex;
    position: absolute;
    width: 10rem;
    height: 4rem;
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
    width: 7.4rem;
    height: 3.6rem;
    margin: -2rem auto 0 auto;
    overflow: hidden;
}

.button.r,
.button.r .layer {
    border-radius: 10rem;
}

.button.b2 {
    border-radius: 0.2rem;
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
    top: 0.4rem;
    left: 0.4rem;
    width: 2rem;
    height: 1rem;
    font-family: $font-family;
    color: $light;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 0.9rem 0.4rem;
    background-color: $orange;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

#button1 .checkbox:checked+.knobs:before {
    content: "RU";
    left: 4.2rem;
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