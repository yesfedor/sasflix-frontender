import type { ApiPostItem } from '~/api/post-id'

export interface ApiPostsItem extends ApiPostItem {}

interface ApiPostsResponse {
  posts: ApiPostsItem[]
  total: number
  skip: number
  limit: number
}

export async function apiPosts() {
  try {
    const config = useRuntimeConfig()
    const endpoint = `${config.public.API_ENDPOINT}/posts?limit=5`
    return await $fetch<ApiPostsResponse>(endpoint)
  } catch (e) {
    useConsole().warn('apiPosts', 'error', e)
  }
}
