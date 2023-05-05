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
  <a ref="btn" href="#" :class="$style.wrapper" @mousemove="animation">
    <i></i><i></i>
    <span>
      <slot />
    </span>
  </a>
</template>
<style lang="scss" module>
.wrapper {
  display: inline-block;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  width: 15rem;
  height: 5.5rem;
  background-color: aliceblue;

  &:hover {
    i {
      box-sizing: border-box;
      position: absolute;
      inset: -2px;
      display: block;
      background-color: red;
      border-radius: 0.5rem;
      background: linear-gradient(var(--x), #c71835, #0e1538, #0e1538, #fc931d);
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
    color: white;
    letter-spacing: 0.2rem;
    font-family: $font-family;
    font-size: 1.6rem;
    background: rgba(14, 21, 56, 0.65);
    overflow: hidden;

    &:hover {
      border: 0.1rem solid #040a29;
      border-radius: 0.3rem;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0rem;
      left: -50%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.075);
      transform: skew(25deg);
    }
  }
}
</style>