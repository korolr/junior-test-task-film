export const FAVORITE_ADD = "FAVORITE_ADD"
export const FAVORITE_REMOVE = "FAVORITE_REMOVE"

export function addFavorite(item) {
  return {
    type: FAVORITE_ADD,
    payload: item,
  }
}

export function delFavorite(item) {
  return {
    type: FAVORITE_REMOVE,
    payload: item,
  }
}
