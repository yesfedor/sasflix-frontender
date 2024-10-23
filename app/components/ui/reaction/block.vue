<script lang="ts" setup>
import type { ApiPostItem, ApiPostItemReactions } from '~/api/post-id'

const props = defineProps<{ id: ApiPostItem['id'], item: ApiPostItemReactions }>()

const reaction = useReactionSystem(props.id, props.item)
</script>

<template>
  <div class="ui-reaction-block">
    <ui-reaction-like
      :count="reaction.counter.value.likes"
      :active="reaction.isLiked.value"
      @change="reaction.markLike($event)"
    />
    <ui-reaction-dislike
      :count="reaction.counter.value.dislikes"
      :active="reaction.isDisliked.value"
      @change="reaction.markDislike($event)"
    />
  </div>
</template>

<style lang="scss">
@use 'sass:map';

.ui-reaction-block {
  display: flex;
  align-items: center;
  gap: 0 1px;
}

.ui-button {
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 12px;
  outline: 0;
  box-shadow: unset;
  border: unset;
  background: map.get($colors, 'panel');
  border-radius: 30px;
  cursor: pointer;
}

.ui-reaction-button {
  &__text {
    margin-left: 4px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.078px;
  }

  &__counter {
    margin-left: 6px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.ui-reaction-like,
.ui-reaction-dislike {
  .ui-link {
    color: map.get($colors, 'text-action') !important;
  }
  .ui-reaction-button__text {
    color: map.get($colors, 'text-action');
  }
  .ui-reaction-button__counter {
    opacity: 0.3;
  }
}

.ui-reaction-like.ui-reaction-like--active {
  background: map.get($colors, 'danger');

  .ui-icon {
    color: map.get($colors, 'text-on-action') !important;
  }
  .ui-reaction-button__text,
  .ui-reaction-button__counter{
    color: map.get($colors, 'text-on-action');
  }
  .ui-reaction-button__counter {
    opacity: 1;
  }
}

.ui-reaction-dislike.ui-reaction-dislike--active {
  background: map.get($colors, 'text-action');

  .ui-icon {
    color: map.get($colors, 'text-on-action') !important;
  }
  .ui-reaction-button__text,
  .ui-reaction-button__counter {
    color: map.get($colors, 'text-on-action');
  }
  .ui-reaction-button__counter {
    opacity: 0.4;
  }
}
</style>
