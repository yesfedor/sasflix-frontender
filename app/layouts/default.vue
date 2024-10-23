<script setup lang="ts">

</script>

<template>
  <layout-provider>
    <div class="app-layout app-layout--default">
      <layout-base-header />

      <div class="app-layout__content">
        <slot />
      </div>
    </div>
  </layout-provider>
</template>

<style lang="scss">
.app-layout {
  padding: 16px 32px 60px;

  &__content {
    margin: 10px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
