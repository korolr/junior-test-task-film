import axios from "axios"

import { api } from "../utils/api"

export const GENRE_REQUEST = "GENRE_REQUEST"
export const GENRE_SUCCESS = "GENRE_SUCCESS"
export const GENRE_FAIL = "GENRE_FAIL"

export function getGenre() {
  return dispatch => {
    dispatch({
      type: GENRE_REQUEST,
    })

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`
      )
      .then(function(response) {
        dispatch({
          type: GENRE_SUCCESS,
          payload: response.data.genres,
        })
      })
      .catch(function(error) {
        dispatch({
          type: GENRE_FAIL,
          payload: error,
        })
      })
  }
}
