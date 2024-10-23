<script lang="ts" setup>
import type { TUiIconNames } from '#build/types/ui-icon'

const props = defineProps<{ count: number, active: boolean }>()
const emit = defineEmits<{
  change: [boolean]
}>()

const icon = computed((): TUiIconNames => props.active ? 'dislike-filled' : 'dislike')
</script>

<template>
  <button
    class="ui-button ui-reaction-button ui-reaction-dislike"
    :class="{
      'ui-reaction-dislike--active': props.active,
    }"
    @click="emit('change', !props.active)"
  >
    <ui-icon :name="icon" />

    <span class="ui-reaction-button__text">
      Trash
    </span>

    <span class="ui-reaction-button__counter">
      {{ props.count }}
    </span>
  </button>
</template>

<style lang="scss">

</style>
