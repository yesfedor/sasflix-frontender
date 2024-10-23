<script lang="ts" setup>
import moment from 'moment'
import type { ApiPostItem } from '~/api/post-id'

const props = defineProps<{ post: ApiPostItem, isActive?: boolean }>()
const post = toRef(props, 'post')
const time = moment().format('yyy-MM-DD')
const localePath = useLocalePath()
</script>

<template>
  <article class="ui-card-post">
    <header class="ui-card-post__header">
      {{ post.title }}
    </header>

    <main class="ui-card-post__content">
      {{ post.body }}
    </main>

    <footer class="ui-card-post__footer">
      <ui-reaction-block
        :id="post.id"
        :item="post.reactions"
        class="ui-card-post__reaction"
      />

      <nuxt-link
        v-if="!props.isActive"
        :to="localePath({ name: 'post-id', params: { id: post.id } })"
        class="ui-link ui-card-post__comments-action"
      >
        Open comments
      </nuxt-link>

      <ui-badge-time
        :time="time"
        class="ui-card-post__reaction"
      />

      <ui-tag-list :list="props.post.tags" />
    </footer>
  </article>
</template>

<style lang="scss">
.ui-card-post {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    flex-direction: column;

    @include typography-h1;
  }

  &__content {
    margin: 16px 0 0;
    max-width: 676px;
  }

  &__footer {
    margin: 24px 0 0;
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
}
</style>
