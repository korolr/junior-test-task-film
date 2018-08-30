import { FILM_REQUEST, FILM_SUCCESS, FILM_FAIL } from "../actions/filmActions"

const initialState = {
  data: [],
  error: "",
  generes: [],
}

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case FILM_REQUEST:
      return { ...state, error: "" }

    case FILM_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }

    case FILM_FAIL:
      return { ...state, error: action.payload.message }

    default:
      return state
  }
}
