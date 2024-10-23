<script lang="ts" setup>
import type { ApiPostItem } from '~/api/post-id'

const props = defineProps<{ list: ApiPostItem['tags'] }>()
</script>

<template>
  <div
    v-if="props.list.length"
    class="ui-tag-list"
  >
    <ui-tag-item
      v-for="(item, index) in props.list"
      :key="item"
      :item="item"
      :tail="!index"
    />
  </div>
</template>

<style lang="scss">
.ui-tag-list {
  display: flex;
  gap: 0 4px;
}
</style>
