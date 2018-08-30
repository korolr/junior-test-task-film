import axios from "axios"

import { api } from "../utils/api"

export const FILM_REQUEST = "FILM_REQUEST"
export const FILM_SUCCESS = "FILM_SUCCESS"
export const FILM_FAIL = "FILM_FAIL"

export function getFilm(id) {
  return dispatch => {
    dispatch({
      type: FILM_REQUEST,
    })

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=${id}`
      )
      .then(function(response) {
        dispatch({
          type: FILM_SUCCESS,
          payload: response.data.results,
        })
      })
      .catch(function(error) {
        dispatch({
          type: FILM_FAIL,
          payload: error,
        })
      })
  }
}
