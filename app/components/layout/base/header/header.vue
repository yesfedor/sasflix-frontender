<script lang="ts" setup>

</script>

<template>
  <header class="app-header">
    <span class="app-header__text">ikakprosto.ru</span>
  </header>
</template>

<style lang="scss">
@use 'sass:map';

.app-header {
  margin: 0;
  padding: 0 0 48px;
  position: relative;
  text-align: center;

  &__text {
    color: map.get($colors, 'accent');
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    font-family: map.get($typography, 'display');
  }
}
</style>
