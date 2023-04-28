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
    } ]'><slot/></button>
</template>
<style lang="scss" module>
.btn {
 @include primeBtn($grey,15rem,5rem)
}
.grey{
  @include colorBtn($grey);
  &:hover{
    @include colorBtnHover($grey)
  }
}
.orange{
    @include colorBtn($orange);
    width: 20rem;
    &:hover{
      @include colorBtnHover($orange)
    }
}
.red{
    @include colorBtn($red);
    &:hover{
      @include colorBtnHover($red)
    }
}
</style>