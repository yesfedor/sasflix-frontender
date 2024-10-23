interface ApiPostResponse {
  data: unknown
}

export interface ApiPostItemReactions {
  likes: number
  dislikes: number
}

export interface ApiPostItem {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: ApiPostItemReactions
  views: number
  userId: number
}

export async function apiPostById(id: number) {
  try {
    const config = useRuntimeConfig()
    const endpoint = `${config.public.API_ENDPOINT}/posts/${id}/comments`
    return await $fetch<ApiPostResponse>(endpoint)
  } catch (e) {
    useConsole().warn('apiPosts', 'error', e)
  }
}
