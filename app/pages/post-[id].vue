<script lang="ts" setup>
import type { ApiPostItem } from '~/api/post-id'

const router = useRouter()

const id = computed(() => {
  return Number(router.currentRoute.value.params.id as string)
})

const postQuery = await useAsyncData(`post-${id.value}`, async () => {
  return apiPostById(id.value)
})

const post = computed(() => {
  return postQuery.data.value as ApiPostItem
})

useHead({
  titleTemplate() {
    return `${post.value.title} - ikakprosto`
  },
})
</script>

<template>
  <div class="app-page-post">
    <ui-card-post :post="post" is-active />
  </div>
</template>

<style lang="scss">

</style>
