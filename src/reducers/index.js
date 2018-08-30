import { combineReducers } from "redux"
import { filmReducer } from "./film"
import { favoriteReducer } from "./favorite"
import { genreReducer } from "./genre"
export const rootReducer = combineReducers({
  film: filmReducer,
  favorite: favoriteReducer,
  genre: genreReducer,
})
