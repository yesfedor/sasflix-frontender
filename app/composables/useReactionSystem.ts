import cloneDeep from 'lodash-es/cloneDeep'
import type { ApiPostItem, ApiPostItemReactions } from '~/api/post-id'

interface ReactionState {
  [key: string]: {
    isLiked: boolean
    isDisliked: boolean
  }
}

/**
 * @name getState
 * @description
 * Апи должен предоствлять данны isLiked и isDisliked для пользователя,
 * эту логику я сэмулирую
 */
function getState(id: ApiPostItem['id'] | string) {
  const getDefault = () => {
    return {
      isLiked: false,
      isDisliked: false,
    }
  }

  const store = useCookie<ReactionState>('reaction-state', {
    default() {
      return {}
    },
    maxAge: 30 * 24 * 60 * 60,
  })

  id = String(id)

  const createItem = () => {
    store.value[id] = {
      isLiked: false,
      isDisliked: false,
    }
  }

  const getItem = () => {
    return (store.value[id] || getDefault()) as ReactionState[ApiPostItem['id']]
  }

  const getOutputItem = (): ReactionState[ApiPostItem['id']] => {
    return cloneDeep(getItem())
  }

  const like = (state: boolean) => {
    createItem()
    store.value[id]!.isLiked = state
    store.value[id]!.isDisliked = false
    return getOutputItem()
  }

  const dislike = (state: boolean) => {
    createItem()
    store.value[id]!.isLiked = false
    store.value[id]!.isDisliked = state
    return getOutputItem()
  }

  return {
    item: getOutputItem(),
    like,
    dislike,
  }
}

export function useReactionSystem(id: ApiPostItem['id'], item: ApiPostItemReactions) {
  const api = getState(id)

  const isLiked = ref(api.item.isLiked)
  const isDisliked = ref(api.item.isDisliked)

  const counter = computed(() => {
    let likes = item.likes
    if (isLiked.value) {
      likes += 1
    }

    let dislikes = item.dislikes
    if (isDisliked.value) {
      dislikes += 1
    }

    return {
      likes,
      dislikes,
    }
  })

  const markLike = (state: boolean) => {
    const result = api.like(state)
    isLiked.value = result.isLiked
    isDisliked.value = result.isDisliked
  }

  const markDislike = (state: boolean) => {
    const result = api.dislike(state)
    isLiked.value = result.isLiked
    isDisliked.value = result.isDisliked
  }

  return {
    counter,
    isLiked,
    isDisliked,
    markLike,
    markDislike,
  }
}
