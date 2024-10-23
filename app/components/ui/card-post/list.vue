<script lang="ts" setup>
import type { ApiPostsItem } from '~/api/posts'

const props = defineProps<{ list: ApiPostsItem[] | undefined }>()
</script>

<template>
  <section class="ui-card-post-list">
    <template v-if="props.list">
      <ui-card-post
        v-for="post in props.list"
        :key="post.id"
        :post="post"
      />
    </template>
    <div v-else>No Result</div>
  </section>
</template>

<style lang="scss">
.ui-card-post-list {
  display: flex;
  flex-direction: column;
  gap: 32px 0;
}
</style>
