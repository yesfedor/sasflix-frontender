<script lang="ts" setup>
import type { ApiPostItem } from '~/api/post-id'

const props = defineProps<{ item: ApiPostItem['tags'][0], tail?: boolean }>()
</script>

<template>
  <div
    class="ui-text ui-tag-item"
    :class="{
      'ui-tag-item--tail': props.tail,
    }"
  >
    <ui-icon
      name="quaternary"
      class="ui-tag-item__quaternary"
    />
    <span class="ui-tag-item__text">{{ props.item }}</span>
  </div>
</template>

<style lang="scss">
@use "sass:map";

.ui-tag-item {
  display: flex;
  align-items: center;
  position: relative;

  &__text {
    padding: 4px;
    color: map.get($colors, 'text-action');
    background: map.get($colors, 'fills-quaternary');
    border-radius: 3px;
  }

  &__quaternary {
    display: none;
  }

  &--tail {
    .ui-icon {
      position: absolute;
      top: 0;
      left: 3px;
      bottom: 0;
      color:  map.get($colors, 'fills-quaternary');
      font-size: 20px !important;
    }

    .ui-tag-item__quaternary {
      display: block;
    }

    .ui-tag-item__text {
      margin-left: 18px;
      padding-left: 0;
    }
  }
}
</style>
