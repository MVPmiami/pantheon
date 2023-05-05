<script setup lang="ts">
import { ref, Ref } from 'vue'

const btn: Ref<null | any | HTMLElement> = ref(null)

let animation: (event: MouseEvent) => void = (event) => {
  let rect = btn.value.getBoundingClientRect()
  let x = event.clientX * 3 - rect.left
  btn.value.style.setProperty('--x', x + 'deg')
};

</script>
<template>
  <div ref="btn" href="#" :class="$style.wrapper" @mousemove="animation">
    <i></i><i></i>
    <span>
      <slot />
    </span>
  </div>
</template>
<style lang="scss" module>
.wrapper {
  display: inline-block;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  width: 15rem;
  height: 5.5rem;
  background-color: $light;
  cursor: pointer;

  &:hover {
    i {
      box-sizing: border-box;
      position: absolute;
      inset: -2px;
      display: block;
      border-radius: 0.5rem;
      background: linear-gradient(var(--x), $red, $dark-blue, $dark-blue, $orange);
    }
  }

  span {
    box-sizing: border-box;
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: $light;
    letter-spacing: 0.2rem;
    font-family: $font-family;
    font-size: 1.6rem;
    background: #040d37a6;
    overflow: hidden;

    &:hover {
      border: 0.1rem solid $dark;
      border-radius: 0.3rem;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0rem;
      left: -50%;
      width: 100%;
      height: 100%;
      background: $light-red;
      transform: skew(25deg);
    }
  }
}
</style>