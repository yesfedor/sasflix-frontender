<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core'

const props = defineProps<{ time: string }>()
const timeLabel = useTimeAgo(props.time)
</script>

<template>
  <div class="ui-text ui-badge-time">
    {{ timeLabel }}
  </div>
</template>

<style lang="scss">
@use 'sass:map';

.ui-badge-time {
  color: map.get($colors, 'text-muted');
}
</style>
