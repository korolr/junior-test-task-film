import {
  GENRE_REQUEST,
  GENRE_SUCCESS,
  GENRE_FAIL,
} from "../actions/genreActions"

const initialState = {
  data: [],
}

export function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GENRE_REQUEST:
      return { ...state, error: "" }

    case GENRE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }

    case GENRE_FAIL:
      return { ...state, error: action.payload.message }

    default:
      return state
  }
}
