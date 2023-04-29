<script setup lang="ts">
const props = defineProps({
  color: String
})
</script>
<template>
  <button :class='[$style.btn, $style.animation,
  {
    [$style.red]: props.color === "red"
  },
  {
    [$style.grey]: props.color === "grey"
  },
  {
    [$style.orange]: props.color === "orange"
  }]'>
    <slot />
  </button>
</template>
<style lang="scss" module>
.btn {
  @include primeBtn(15rem, 5rem)
}

.grey {
  @include colorBtn($grey);

  &:hover {
    @include colorBtnHover($grey)
  }
}

.orange {
  @include colorBtn($orange);
  width: 20rem;

  &:hover {
    @include colorBtnHover($orange)
  }
}

.red {
  @include colorBtn($red);

  &:hover {
    @include colorBtnHover($red)
  }
}

@media(max-width:1380px) {
  .btn {
    @include primeBtn(15rem, 5rem);
  }
}

@media(max-width:980px) {
  .btn {
    @include primeBtn(12rem, 4rem);
    font-size: 1.4rem
  }
}

@media(max-width:680px) {
  .btn {
    @include primeBtn(12rem, 4rem);
    font-size: 1.2rem;
  }

  .orange {
    width: 12rem;
  }
}</style>