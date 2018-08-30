import { FAVORITE_ADD, FAVORITE_REMOVE } from "../actions/favoriteActions"

const initialState = {
  data: [],
}

export function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }

    case FAVORITE_REMOVE:
      return {
        ...state,
        data: state.data.filter(data => data.id !== action.payload.id),
      }

    default:
      return state
  }
}
