<script lang="ts" setup>
const posts = await useAsyncData('posts', apiPosts)

useHeadSafe({
  title: 'ikakprosto - posts',
})
</script>

<template>
  <div class="app-page-home">
    <ui-card-post-list :list="posts.data.value?.posts" />
  </div>
</template>

<style lang="scss">

</style>
